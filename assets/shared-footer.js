// Shared footer loader for Wellround website
document.addEventListener('DOMContentLoaded', function() {
    // Find the footer placeholder
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        // Fetch the footer HTML
        fetch('./footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.warn('Could not load footer:', error);
                // Fallback footer
                footerPlaceholder.innerHTML = `
                    <footer class="max-w-7xl mx-auto px-6 py-16 border-t border-white/20 mt-16">
                        <div class="text-center text-sm text-gray-600">
                            <p>&copy; 2025 Wellround. All rights reserved.</p>
                        </div>
                    </footer>
                `;
            });
    }
});
