document.getElementById('theme-toggle').onclick = function() {
            document.body.classList.toggle('dark-theme');
        };
// Set the current year in the footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Copy email functionality
document.addEventListener('DOMContentLoaded', function() {
                    const copyBtn = document.getElementById('copy-email');
                    const email = document.getElementById('email').textContent.trim();
                    copyBtn.addEventListener('click', function() {
                        navigator.clipboard.writeText(email).then(() => {
                            copyBtn.title = "Copied!";
                            // Show a message after copying
                            let msg = document.createElement('span');
                            msg.textContent = " Email copied!";
                            msg.style.marginLeft = "8px";
                            msg.style.color = "gold";
                            msg.style.fontWeight = "bold";
                            copyBtn.parentNode.appendChild(msg);
                            setTimeout(() => {
                                copyBtn.title = "Copy email";
                                msg.remove();
                            }, 1500);
                        });
                    });
                });


                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.body.classList.add('dark-theme');
                }