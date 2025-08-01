import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

interface AccentColor {
    name: string;
    hex: string;
    iconId?: string;
}

const accentColors: AccentColor[] = [
    { name: 'Acid Lime', hex: '#B4E33D' },
    { name: 'Blue', hex: '#3D8AE3' },
    { name: 'Bright Teal', hex: '#00E5E5' },
    { name: 'Cyan', hex: '#57D7FF' },
    { name: 'Indigo', hex: '#6C5CE7' },
    { name: 'Lime', hex: '#00FF00' },
    { name: 'Orange', hex: '#FF9142' },
    { name: 'Pink', hex: '#FF73B5' },
    { name: 'Purple', hex: '#B37FEB' },
    { name: 'Teal', hex: '#18C2C0' },
    { name: 'Tomato', hex: '#FF6B6B' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Yellow', hex: '#FFD93D' }
];

export function activate(context: vscode.ExtensionContext) {
    // Initialize color icons
    accentColors.forEach(color => {
        const svgFileName = `${color.name.toLowerCase().replace(' ', '-')}.svg`;
        const iconPath = vscode.Uri.file(path.join(context.extensionPath, 'assets', svgFileName));
        color.iconId = `${color.name.toLowerCase().replace(' ', '-')}`;
    });

    // Create status bar item
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

    // Function to update status bar with current accent color
    const updateStatusBar = (colorName: string) => {
        const color = accentColors.find(c => c.name.toLowerCase() === colorName.toLowerCase());
        if (color) {
            statusBarItem.text = `$(symbol-color) ${color.name}`;
            statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.remoteBackground');
            statusBarItem.color = color.hex;
            statusBarItem.tooltip = "Change Tira Theme Accent Color";
            statusBarItem.command = 'tira-theme.changeAccentColor';
        }
    };


    // Get current accent color from settings
    const config = vscode.workspace.getConfiguration('tira-theme');
    const currentAccent = config.get<string>('accentColor') || 'cyan';
    updateStatusBar(currentAccent);

    statusBarItem.command = 'tira-theme.changeAccentColor';
    statusBarItem.show();
    context.subscriptions.push(statusBarItem); let disposable = vscode.commands.registerCommand('tira-theme.changeAccentColor', async () => {
        // Get the extension path
        const extensionPath = context.extensionPath;
        const selectedColor = await vscode.window.showQuickPick(
            accentColors.map(color => {
                const svgFileName = `${color.name.toLowerCase().replace(' ', '-')}.svg`;
                return {
                    label: color.name,
                    color: color,
                    iconPath: vscode.Uri.file(path.join(extensionPath, 'assets', svgFileName)),
                    buttons: [{
                        iconPath: vscode.Uri.file(path.join(extensionPath, 'assets', svgFileName)),
                        tooltip: 'Preview color'
                    }]
                };
            }),
            {
                placeHolder: 'Select accent color',
                matchOnDescription: true
            }
        );

        if (selectedColor) {
            const color = selectedColor.color;
            if (color) {
                const config = vscode.workspace.getConfiguration();
                const colorCustomizations = config.get('workbench.colorCustomizations') as any || {};

                // Store the selected accent color
                await config.update('tira-theme.accentColor', color.name.toLowerCase(), vscode.ConfigurationTarget.Global);

                // Update color customizations for all Vira themes
                colorCustomizations['[Vira*]'] = {
                    'toolbar.activeBackground': `${color.hex}26`,
                    'button.background': color.hex,
                    'button.hoverBackground': `${color.hex}cc`,
                    'extensionButton.separator': `${color.hex}33`,
                    'extensionButton.background': `${color.hex}14`,
                    'extensionButton.foreground': color.hex,
                    'extensionButton.hoverBackground': `${color.hex}33`,
                    'extensionButton.prominentForeground': color.hex,
                    'extensionButton.prominentBackground': `${color.hex}14`,
                    'extensionButton.prominentHoverBackground': `${color.hex}33`,
                    'activityBarBadge.background': color.hex,
                    'activityBar.activeBorder': color.hex,
                    'activityBarTop.activeBorder': color.hex,
                    'list.inactiveSelectionIconForeground': color.hex,
                    'list.activeSelectionForeground': color.hex,
                    'list.inactiveSelectionForeground': color.hex,
                    'list.highlightForeground': color.hex,
                    'sash.hoverBorder': `${color.hex}80`,
                    'list.activeSelectionIconForeground': color.hex,
                    'scrollbarSlider.activeBackground': `${color.hex}80`,
                    'editorSuggestWidget.highlightForeground': color.hex,
                    'textLink.foreground': color.hex,
                    'progressBar.background': color.hex,
                    'pickerGroup.foreground': color.hex,
                    'tab.activeBorder': color.hex,
                    'tab.activeBorderTop': `${color.hex}00`,
                    'tab.unfocusedActiveBorder': color.hex,
                    'tab.unfocusedActiveBorderTop': `${color.hex}00`,
                    'tab.activeModifiedBorder': `${color.hex}00`,
                    'notificationLink.foreground': color.hex,
                    'editorWidget.resizeBorder': color.hex,
                    'editorWidget.border': color.hex,
                    'settings.modifiedItemIndicator': color.hex,
                    'panelTitle.activeBorder': color.hex,
                    'breadcrumb.activeSelectionForeground': color.hex,
                    'menu.selectionForeground': color.hex,
                    'menubar.selectionForeground': color.hex,
                    'editor.findMatchBorder': color.hex,
                    'selection.background': `${color.hex}40`,
                    'statusBarItem.remoteBackground': `${color.hex}14`,
                    'statusBarItem.remoteHoverBackground': color.hex,
                    'statusBarItem.remoteForeground': color.hex,
                    'notebook.inactiveFocusedCellBorder': `${color.hex}80`,
                    'commandCenter.activeBorder': `${color.hex}80`,
                    'chat.slashCommandForeground': color.hex,
                    'chat.avatarForeground': color.hex,
                    'activityBarBadge.foreground': '#000000',
                    'button.foreground': '#000000',
                    'statusBarItem.remoteHoverForeground': '#000000'
                };

                await config.update('workbench.colorCustomizations', colorCustomizations, vscode.ConfigurationTarget.Global);
                vscode.window.showInformationMessage(`Accent color changed to ${color.name}`);

                // Update status bar with new color
                updateStatusBar(color.name);
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
