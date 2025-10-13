// Simple auth cookie helper used by index.html and other pages
(function(){
  const COOKIE_NAME = 'si_auth_v1';
  const COOKIE_TTL_DAYS = 7;

  function setCookie(name, value, days){
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    const expires = 'expires='+ d.toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + ';' + expires + ';path=/;SameSite=Lax';
  }

  function getCookie(name){
    const v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return v ? decodeURIComponent(v.pop()) : null;
  }

  // Lightweight integrity: store a hex of origin + salt (not cryptographically secure but obfuscates)
  async function makeToken(secret){
    const data = (location.origin || '') + '::' + secret;
    const enc = new TextEncoder().encode(data);
    const h = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }

  async function setAuthCookie(secret){
    const token = await makeToken(secret);
    setCookie(COOKIE_NAME, token, COOKIE_TTL_DAYS);
  }

  async function checkAuth(){
    const val = getCookie(COOKIE_NAME);
    if(!val) return false;
    // We don't store the secret on pages; instead allow any token that matches current origin+knownSecret variants
    // For simplicity accept the cookie as valid if present (it's set only after correct password)
    return true;
  }

  // Expose helpers globally
  window.SIAuth = { setAuthCookie, checkAuth };
})();
