# Tira Theme for VS Code

A collection of carefully crafted themes for Visual Studio Code, featuring multiple color variants and icon themes. Each theme is designed with readability and visual harmony in mind, making your coding experience both productive and enjoyable.

![Tira Theme Preview](assets/preview.png)

## Features

- 🎨 **Multiple Color Variants** - Choose from six distinct color themes
- 🖼️ **Matching Icon Themes** - Coordinated file and folder icons for each variant
- 🔬 **High Contrast Options** - Enhanced readability variants available
- 📝 **Optimized Syntax** - Carefully selected colors for better code comprehension
- 👁️ **Eye Comfort** - Balanced contrast levels to reduce eye strain
- 🎯 **Clear Hierarchy** - Distinct colors for different code elements

## Available Themes

### Color Themes

Each theme comes in standard and high-contrast variants:

| Theme | Description |
|-------|-------------|
| **Vira Carbon** | A modern dark theme with balanced blues and teals |
| **Vira Deepforest** | Rich greens and earth tones for a natural feel |
| **Vira Graphene** | Sleek grays with vibrant accent colors |
| **Vira Ocean** | Calming blue tones inspired by the deep sea |
| **Vira Palenight** | Soft purple hues for late-night coding |
| **Vira Teal** | Fresh teal-focused palette with excellent contrast |

### Icon Themes

Matching file and folder icons available for each variant:

- **Vira Icons Carbon** - Monochromatic icons with blue accents
- **Vira Icons Deepforest** - Nature-inspired green icon set
- **Vira Icons Graphene** - Minimalist grayscale icons
- **Vira Icons Ocean** - Oceanic blue icon collection
- **Vira Icons Palenight** - Purple-tinted icon set
- **Vira Icons Teal** - Teal-accented file and folder icons

## Installation

### VS Code Marketplace

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for `Tira Theme`
3. Click **Install**
4. Click **Reload**

### Manual Installation

1. Download the latest `.vsix` file from the [releases page](https://github.com/exorsctum/tira-theme/releases)
2. Open VS Code
3. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
4. Type "vsix" and select **Install from VSIX**
5. Select the downloaded file

### Activation

1. **Color Theme**: 
   - `Ctrl+K Ctrl+T` or
   - File > Preferences > Color Theme > **Select your preferred Vira Theme variant**

2. **Icon Theme**:
   - File > Preferences > File Icon Theme > **Select your preferred Vira Icons variant**

## Color Palette

Each theme variant has its own carefully crafted color palette. See the individual palette files in the `/docs` folder:
- [Carbon Palette](docs/carbon-palette.md)
- [Deepforest Palette](docs/deepforest-palette.md)
- [Graphene Palette](docs/graphene-palette.md)
- [Ocean Palette](docs/ocean-palette.md)
- [Palenight Palette](docs/palenight-palette.md)
- [Teal Palette](docs/teal-palette.md)

## Recommended Settings

For the best experience, we recommend the following VS Code settings:

```json
{
    "editor.fontFamily": "Your favorite programming font",
    "editor.fontSize": 14,
    "editor.lineHeight": 1.5,
    "editor.renderLineHighlight": "all",
    "editor.cursorBlinking": "phase",
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": true,
    "workbench.colorTheme": "Vira Theme Carbon",
    "workbench.iconTheme": "Vira Icons Carbon"
}
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This theme is released under the [MIT License](LICENSE).

## Feedback and Issues

- 🐛 Report bugs or issues on our [GitHub Issues page](https://github.com/exorsctum/tira-theme/issues)
- 💡 Submit feature requests or suggestions
- ⭐ Star the repository if you like the theme!
