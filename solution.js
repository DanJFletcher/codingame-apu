/**
 * Don't let the machines win. You are humanity's last hope...
 **/

var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis
printErr(height);
printErr(width);
var output = "";
var grid = [];

for (var i = 0; i < height; i++) {
    var line = readline(); // width characters, each either 0 or .
    // printErr(line);
    grid.push(line.split(""));
    printErr(grid);
}

for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
        
        if (grid[y][x] !== ".") {
            output = x + ' ' + y;
        } else { continue; }
        printErr(grid[y][x + 1]);
        
        var foundX = false,
            foundY = false;
        
        // check x
        for (var i = x; i <= width; i++) {
            if (grid[y][i + 1] == "0") {
                output += ' ' + (1 + i) + ' ' + y;
                foundX = true;
                break;
            }
        }
        
        if (!foundX) {
            output += ' ' + -1 + ' ' + -1;
        }
        
        // check y
        for (var i = y; i <= height; i++) {
            if (grid[i + 1] && grid[i + 1][x] == "0") {
                output += ' ' + x + ' ' + (1 + i);
                foundY = true;
                break;
            }
        }
        
        if (!foundY) {
            output += ' ' + -1 + ' ' + -1;
        }
        
        
        print(output);
        
    }
}