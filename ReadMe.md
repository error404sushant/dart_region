# Dart Region - VS Code Extension

A specialized Visual Studio Code extension for Dart developers that provides enhanced region folding capabilities using `//region` and `//endregion` comments.

**Created by Sushant**

## Overview

This extension enhances code organization in Dart files by allowing you to create collapsible regions using simple comment markers. Perfect for organizing large Dart classes, grouping related methods, or structuring your Flutter widgets.

## Usage

Simply wrap your Dart code with region comments:

```dart
//region Constructor
MyClass({
  required this.title,
  required this.onPressed,
});
//endregion

//region Private Methods
void _handleTap() {
  // Implementation here
}

void _updateState() {
  // Implementation here
}
//endregion

//region Widget Build
@override
Widget build(BuildContext context) {
  return Container(
    // Widget implementation
  );
}
//endregion
```

## Features

### ✨ Dart-Optimized Region Folding
- Clean `//region` and `//endregion` syntax (no # symbols required)
- Seamless integration with Dart and Flutter development workflow
- Automatic detection and folding of region blocks

### 🎯 Developer-Friendly Commands
- **Collapse All Regions**: Quickly fold all regions in your Dart file
- **Wrap Selection**: Convert selected code into a foldable region
- **Region Management**: Delete, select, and manipulate regions easily

### ⚡ Productivity Boosters
- Organize large Dart classes and Flutter widgets
- Improve code readability and navigation
- Reduce visual clutter in complex files
- Perfect for Clean Architecture implementations

## Commands

Access these commands via the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`):

| Command | Description | Shortcut |
|---------|-------------|---------|
| `Dart Region: Wrap selection with region tag` | Wraps selected code with region markers | `Ctrl+M Ctrl+R` |
| `Dart Region: Collapse all regions` | Folds all regions in the current file | |
| `Dart Region: Collapse default regions` | Folds default regions | `Ctrl+Shift+M Ctrl+Shift+R` |
| `Dart Region: Select current region` | Selects the entire region including tags | |
| `Dart Region: Select current region contents` | Selects only the content within region tags | |
| `Dart Region: Delete current region tags` | Removes region tags but keeps content | |
| `Dart Region: Delete current region tags and contents` | Removes entire region including content | |

## Configuration

The extension works out-of-the-box with Dart files. For advanced customization, you can modify settings in your VS Code settings file:

```json
{
  "maptz.regionfolder": {
    "[dart]": {
      "foldEnd": "//endregion",
      "foldEndRegex": "//[\\s]*endregion",
      "foldStart": "//region [NAME]",
      "foldStartRegex": "//[\\s]*region[\\s]*(.*)",
      "disableFolding": false
    }
  }
}
```

## Installation

1. Open Visual Studio Code
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Type: `ext install dart-region`
4. Press Enter and reload VS Code

Alternatively, search for "Dart Region" in the VS Code Extensions marketplace.

## Best Practices

### 🏗️ Flutter Widget Organization
```dart
//region Lifecycle Methods
@override
void initState() {
  super.initState();
}

@override
void dispose() {
  super.dispose();
}
//endregion

//region Build Methods
@override
Widget build(BuildContext context) {
  return _buildMainContent();
}

Widget _buildMainContent() {
  // Implementation
}
//endregion
```

### 📦 Class Organization
```dart
//region Properties
final String title;
final VoidCallback? onPressed;
final bool isEnabled;
//endregion

//region Constructor
MyButton({
  required this.title,
  this.onPressed,
  this.isEnabled = true,
});
//endregion

//region Public Methods
void performAction() {
  // Implementation
}
//endregion

//region Private Methods
void _handleInternalLogic() {
  // Implementation
}
//endregion
```

## Why Dart Region?

- **Dart-First Design**: Built specifically for Dart and Flutter developers
- **Clean Syntax**: Uses standard Dart comment syntax without special characters
- **Productivity Focused**: Streamlines code organization in large projects
- **Zero Configuration**: Works immediately with Dart files
- **Lightweight**: Minimal performance impact on your development workflow

## Support

For issues, feature requests, or contributions, please contact the developer.

**Created with ❤️ by Sushant for the Dart & Flutter community**

---

*This extension helps you write cleaner, more organized Dart code. Happy coding! 🎯*
