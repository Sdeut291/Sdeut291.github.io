var names = new Array();
names[0] = "Deut";
names[1] = "John";
names[2] = "Jenneth";
names[3] = "jason";
names[4] = "Pam";
names[5] = "frank";
names[6] = "lorrance";
names[7] = "paulinar";
names[8] = "larrain";
names[9] = "jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}