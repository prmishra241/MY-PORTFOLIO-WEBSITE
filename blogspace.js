document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const blog = button.parentElement;
    blog.classList.toggle('expanded');
    button.textContent = blog.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});