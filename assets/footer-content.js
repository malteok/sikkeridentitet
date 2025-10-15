// /assets/footer-content.js
// Centraliseret footer for Sikker Identitet

(function() {
    'use strict';
    
    // Tilføj CSS styling direkte i JavaScript
    const style = document.createElement('style');
    style.textContent = `
        /* Ensure body takes full height */
        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            margin: 0;
        }

        /* Push footer to bottom */
        body > *:not(.site-footer) {
            flex: 1 0 auto;
        }

        /* Footer Styles */
        .site-footer {
            background: #1e293b;
            color: #fff;
            padding: 2rem 1rem;
            margin-top: auto;
            flex-shrink: 0;
            width: 100%;
            box-sizing: border-box;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            width: 100%;
            box-sizing: border-box;
        }

        .footer-info {
            display: flex;
            align-items: center;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
        }

        .footer-link {
            color: #cbd5e1;
            text-decoration: none;
            transition: color 0.2s;
            font-size: 0.9rem;
            font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .footer-link:hover {
            color: #3b82f6;
        }

        .copyright {
            color: #94a3b8;
            margin: 0;
            font-size: 0.9rem;
            font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Footer Responsive */
        @media (max-width: 768px) {
            .site-footer {
                padding: 1.5rem 1rem;
            }

            .footer-content {
                gap: 1rem;
            }

            .footer-info {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }

            .footer-link, .copyright {
                font-size: 0.85rem;
            }

            /* Mobile touch targets */
            .footer-link {
                min-height: 44px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem 1rem;
            }
        }

        /* Desktop optimization */
        @media (min-width: 769px) {
            .footer-info {
                justify-content: space-between;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Footer HTML template
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-info">
                    <p class="copyright">© 2025 Sikker Identitet. Alle rettigheder forbeholdes.</p>
                    <a href="/privatlivspolitik.html" class="footer-link">Privatlivspolitik</a>
                    <a href="/kontakt.html" class="footer-link">Kontakt os</a>
                </div>
            </div>
        </footer>
    `;
    
    // Function to insert footer
    function insertFooter() {
        if (document.body) {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }
    
    // Insert footer when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertFooter);
    } else {
        insertFooter();
    }
    
})();