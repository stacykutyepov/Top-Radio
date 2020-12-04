// Creates a new array with separate sentences
export const newLine = (text) => {
    const newText = [];
    let last = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ".") {
            newText.push(text.slice(last, i + 1).trim());
            last = i + 1;
        } else if (text[i] === "<") {
            return newText;
        }
    }
    return newText;
};