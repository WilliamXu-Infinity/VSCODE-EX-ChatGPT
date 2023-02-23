const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "ChatGPT" is now active!');

    let disposable = vscode.commands.registerCommand('ChatGPT.helloWorld', function () {
        vscode.window.showInformationMessage('Hello World from ChatGPT!');
    });

    let MyActivityBar = vscode.commands.registerCommand('chatgpt-activitybar', () => {
        //function invokes when user clicks on the activity bar icon
        vscode.window.showInformationMessage('myActivityBar');
    });
    
    context.subscriptions.push(disposable, MyActivityBar);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
