//
var fs = require('fs');                                                                        

console.log("Watching /var/log/messages");

fs.watchFile('/var/log/messages', function(curr,prev) {
    console.log("current mtime: " +curr.mtime);
    console.log("previous mtime: "+prev.mtime);
    if (curr.mtime == prev.mtime) {
        console.log("mtime equal");
    } else {
        console.log("mtime not equal");
    }   

    if (curr.mtime - prev.mtime) {
      // file changed
      console.log('file changed....');
    }

});

var timer_count = 0;

function loop_() {

  timer_count++;

  console.log('.....ticker....'+timer_count);

  if(timer_count > 3600) {

     timer_count = 0;

  }


}

var TimerID = null;

function TimerStart(func,delay)
{
   TimerID = setInterval(func,delay);
   console.log('TimerStart().....');
   
}

function TimerStop()
{
	clearInterval(TimerID);
	timer_count = 0;
	TimerID = null;
	console.log('TimerStop()....');

}

TimerStart(loop_,1000);




