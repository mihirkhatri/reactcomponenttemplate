var Filewatcher = require('file-watcher');

var watcherC = new Filewatcher({
    root : './src-component-js',
    filter : function(file,stat) {
        return true;
    }
});

var watcherV = new Filewatcher({
    root : './src-views',
    filter : function(file,stat) {
        return true;
    }
});

watcherC.on('change', function(){
    console.log('reached here');
    run_cmd('npm',['run','comp'],function(text) {
        console.log(text);
    })
});
watcherV.on('change', function(){
    console.log('reached here');
    run_cmd('npm',['run','views'],function(text) {
        console.log(text);
    })
});


function run_cmd(cmd, args, callback) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function(buffer) {
        resp += buffer.toString();
    });

    child.stdout.on('end', function(){
        callback(resp);
    });

}

watcherC.watch();
watcherV.watch();

