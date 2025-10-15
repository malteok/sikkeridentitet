// /assets/header-content.js
// Centraliseret header for Sikker Identitet

(function() {
    'use strict';
    
    // Tilføj CSS styling direkte i JavaScript
    const style = document.createElement('style');
    style.textContent = `
        /* Header & Navigation Styles */
        .site-header {
            background: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 9999;
            height: 60px;
            display: flex;
            align-items: center;
        }

        .main-nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            position: relative;
        }

        .nav-brand {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 1001;
        }

        .brand-icon {
            width: 1.5rem;
            height: 1.5rem;
            background: #3b82f6;
            border-radius: 0.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.8rem;
        }

        .brand-text {
            font-size: 1rem;
            font-weight: 600;
            color: #0f172a;
            letter-spacing: -0.01em;
        }

        .nav-links {
            display: flex;
            gap: 1.5rem;
        }

        .nav-link {
            color: #475569;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
            position: relative;
            padding-bottom: 4px;
        }

        .nav-link:hover,
        .nav-link.active {
            color: #3b82f6;
        }

        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #3b82f6;
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .nav-actions .cta-button {
            padding: 0.5rem 1rem;
            background: #3b82f6;
            color: white;
            border-radius: 0.5rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
            font-size: 0.9rem;
            border: none;
            cursor: pointer;
        }

        .nav-actions .cta-button:hover {
            background: #1e40af;
            transform: translateY(-1px);
        }

        /* Mobile menu button */
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            z-index: 1001;
            width: 44px;
            height: 44px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .menu-toggle span {
            display: block;
            width: 24px;
            height: 2px;
            margin: 3px 0;
            background: #0f172a;
            transition: all 0.3s ease;
            transform-origin: center;
        }

        /* Mobile navigation styles */
        @media (max-width: 768px) {
            .menu-toggle {
                display: flex;
                position: absolute;
                left: 1rem;
                top: 50%;
                transform: translateY(-50%);
            }

            .nav-links, .nav-actions {
                display: none;
            }

            .nav-links.active {
                display: flex;
                position: fixed;
                top: 60px;
                left: 0;
                right: 0;
                background: #fff;
                padding: 1rem 0;
                flex-direction: column;
                align-items: stretch;
                gap: 0;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                width: 100%;
                z-index: 999;
                max-height: calc(100vh - 60px);
                overflow-y: auto;
            }

            .nav-links.active .nav-link {
                display: block;
                width: 100%;
                text-align: center;
                padding: 1rem;
                border-bottom: 1px solid #f1f5f9;
                min-height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                margin: 0;
            }

            .nav-links.active .nav-link:last-child {
                border-bottom: none;
            }

            .nav-brand {
                flex: 1;
                justify-content: center;
                margin-left: 44px;
            }

            .main-nav {
                padding: 0 1rem;
            }

            .nav-actions.active {
                display: flex;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #fff;
                padding: 1rem;
                justify-content: center;
                border-top: 1px solid #e2e8f0;
                z-index: 1000;
            }

            .nav-actions.active .cta-button {
                width: 100%;
                max-width: 280px;
                text-align: center;
                padding: 1rem;
                font-size: 1rem;
            }

            /* Hamburger animation when active */
            .nav-links.active ~ .menu-toggle span:first-child {
                transform: rotate(45deg) translate(6px, 6px);
            }

            .nav-links.active ~ .menu-toggle span:nth-child(2) {
                opacity: 0;
            }

            .nav-links.active ~ .menu-toggle span:last-child {
                transform: rotate(-45deg) translate(6px, -6px);
            }

            /* Prevent body scroll when menu is open */
            body.menu-open {
                overflow: hidden;
            }
        }

        /* Desktop styles */
        @media (min-width: 769px) {
            .nav-links, .nav-actions {
                display: flex !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Header HTML template
    const headerHTML = `
        <header class="site-header">
            <nav class="main-nav">
                <button class="menu-toggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div class="nav-brand">
                    <div class="brand-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <span class="brand-text">SikkerIdentitet.dk</span>
                </div>
                
                <div class="nav-links">
                    <a href="/" class="nav-link ${window.location.pathname === '/' || window.location.pathname === '/index.html' ? 'active' : ''}">Forside</a>
                    <a href="/blog.html" class="nav-link ${window.location.pathname === '/blog.html' ? 'active' : ''}">Blog</a>
                    <a href="/om-os.html" class="nav-link ${window.location.pathname === '/om-os.html' ? 'active' : ''}">Om os</a>
                    <a href="/kontakt.html" class="nav-link ${window.location.pathname === '/kontakt.html' ? 'active' : ''}">Kontakt</a>
                    <a href="/privatlivspolitik.html" class="nav-link ${window.location.pathname === '/privatlivspolitik.html' ? 'active' : ''}">Privatliv</a>
                </div>
                
                
            </nav>
        </header>
    `;
    
    // Insert header immediately at the beginning of body
    function insertHeader() {
        if (document.body) {
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
            document.body.style.paddingTop = '60px';
        }
    }
    
    if (document.body) {
        insertHeader();
    } else {
        document.addEventListener('DOMContentLoaded', insertHeader);
    }
    
    // Initialize mobile menu functionality
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const navActions = document.querySelector('.nav-actions');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpening = !navLinks.classList.contains('active');
                
                navLinks.classList.toggle('active');
                if (navActions) {
                    navActions.classList.toggle('active');
                }
                
                // Toggle body scroll and class
                if (isOpening) {
                    document.body.classList.add('menu-open');
                } else {
                    document.body.classList.remove('menu-open');
                }
                
                // Accessibility
                const isExpanded = navLinks.classList.contains('active');
                this.setAttribute('aria-expanded', isExpanded);
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (navLinks.classList.contains('active') && 
                    !menuToggle.contains(e.target) && 
                    !navLinks.contains(e.target) &&
                    (!navActions || !navActions.contains(e.target))) {
                    closeMobileMenu();
                }
            });
            
            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                    closeMobileMenu();
                }
            });

            function closeMobileMenu() {
                navLinks.classList.remove('active');
                if (navActions) {
                    navActions.classList.remove('active');
                }
                document.body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', false);
            }

            // Close menu on window resize if switching to desktop
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
    
})();