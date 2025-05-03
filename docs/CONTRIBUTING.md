# Contributing to Hangman 2025

Thank you for considering contributing to Hangman 2025! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Bug reports help improve the project. To report a bug:

1. Check if the bug has already been reported in the Issues section
2. Create a new issue with a descriptive title
3. Provide detailed steps to reproduce the bug
4. Include screenshots if applicable
5. Describe the expected behavior and what actually happened
6. Specify your browser, OS, and any relevant environment details

### Suggesting Enhancements

1. Create a new issue with the "enhancement" label
2. Clearly describe the enhancement and its benefits
3. Provide examples or mockups if possible

### Adding New Words

To contribute to our word dictionary:

1. Check the existing words in `assets/js/words.js`
2. Ensure your words fit the appropriate difficulty categories
3. Include meaningful hints and correct category labels
4. Submit a pull request with your additions

### Code Contributions

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run any tests if available
5. Commit your changes with clear commit messages
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Submit a pull request

## Development Setup

1. Clone your forked repository
   ```bash
   git clone https://github.com/yourusername/hangman-2025.git
   ```

2. Navigate to the project directory
   ```bash
   cd hangman-2025
   ```

3. Set up a local development server (optional)
   ```bash
   # Using Python
   python -m http.server
   
   # Using Node.js
   npx serve
   ```

## Coding Guidelines

### HTML
- Use semantic HTML5 elements where appropriate
- Maintain proper indentation (2 spaces)
- Keep markup clean and readable
- Use descriptive class/id names

### CSS
- Follow BEM (Block Element Modifier) naming convention
- Maintain CSS variables for theming
- Organize styles logically
- Use comments for complex styling sections

### JavaScript
- Follow ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Avoid global variables when possible
- Keep functions focused on a single responsibility

## Pull Request Process

1. Update documentation if needed
2. Ensure your code follows the project's coding standards
3. Make sure your changes don't break existing functionality
4. Your pull request will be reviewed by maintainers
5. Address any requested changes
6. Once approved, your changes will be merged

## Project Structure

When contributing, please follow the existing project structure:

```
hangman-2025/
├── index.html               # Main game file
├── assets/
│   ├── css/                 # Stylesheets
│   │   └── styles.css       # Main CSS
│   ├── js/                  # JavaScript files
│   │   ├── game.js          # Game logic
│   │   ├── ui.js            # UI handlers
│   │   └── words.js         # Word dictionaries
│   └── images/              # Images and icons
└── docs/                    # Documentation
```

## Questions?

If you have any questions about contributing, please open an issue with the "question" label.

Thank you for your contributions!