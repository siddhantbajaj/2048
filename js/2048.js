var game=(function (argument) {
	// body...
	//variables
	var total_cell=16;
	var cells=document.getElementsByClassName("cell");
	var arr=[2,4];
	
	var randomize=function (no) {
		// body...
		return Math.floor((Math.random() * (no - 0) + 0));
	}
	var rotateMatrix=function (matrix) {
		// body...
		var newMatrix=[];
	 for (var i = 0; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
             var offset = 4 * i + j;
        //int offset = width * y + x ;
        
        newMatrix.push(matrix[4 * (4 - 1 - j) + i]);
        }
    }
    return newMatrix;
	}

	var setup=function (argument) {
		// body...

	}
	var keyup=function (argument) {
		// body...

	}
	var init=function (argument) {
		// body...
		window.addEventListener("keydown", keyPress);

	}
	var keyPress=function (e) {
		// body...
		
		var code=e.code;

		
		if(code==="ArrowUp"){
			var newMatrix=rotateMatrix(cells);
			var newMatrix1=rotateMatrix(newMatrix);
			ArrowDown(newMatrix1);
		}
		if(code==="ArrowDown"){
			ArrowDown(cells);
			
		}
		if(code==="ArrowRight"){
			
			var newMatrix=rotateMatrix(cells);
			
			ArrowDown(newMatrix);
		}
		if(code==="ArrowLeft"){
			var newMatrix=rotateMatrix(cells);
			var newMatrix1=rotateMatrix(newMatrix);
			var newMatrix2=rotateMatrix(newMatrix1);
			ArrowDown(newMatrix2);
		}
	}
	var ArrowDown=function (cells1) {
		console.log(cells1);
		var hastransform=[{transform:false},{transform:false},{transform:false},{transform:false}];
		
		// body...
		// for(var i=11;i>=0;i--){
		// 	if(cells[i].innerHTML!==" "){
		// 	if(cells[i+4].innerHTML===" "){
		// 		cells[i+4].innerHTML=cells[i].innerHTML;
				
		// 		cells[i].innerHTML=cells[i-4].innerHTML;
		// 		cells[i-4].innerHTML=" ";

		// 	}
		// 	else if(cells[i+4].innerHTML===cells[i].innerHTML){
		// 		var a=parseInt(cells[i+4].innerHTML);
		// 		var b=parseInt(cells[i].innerHTML);
		// 		var c=a+b;
		// 		cells[i+4].innerHTML=c;
		// 		cells[i].innerHTML=cells[i-4].innerHTML;
		// 	}
		// }
		// }
		for(var i=15;i>=0;i--){
			movedown(i,cells1,hastransform);


		}
		var emptycells=[];
			for(var i=0;i<16;i++){
				if(cells[i].innerHTML===" "){
					emptycells.push(cells[i]);
				}
			}
			var no=randomize(emptycells.length);
			console.log(no);
			console.log(emptycells);
			var test=arr[randomize(2)];
			emptycells[no].innerHTML=test;
			var classA="cell"+test;
			emptycells[no].classList.add(classA);
	}
	var movedown=function ( i,cells,hastransform) {
		// body...
		console.log(hastransform);
		if(i===0||i===4||i===8||i===12){
			hasTranform=hastransform[0];
		}
		else if(i===1||i===5||i===9||i===13){
			hasTranform=hastransform[1];
		}
		else if(i===3||i===6||i===10||i===14){
			hasTranform=hastransform[2];
		}
		else if(i===4||i===7||i===11||i===15){
			hasTranform=hastransform[3];
		}

		if(i+4<16){
			if(cells[i+4].innerHTML===" "){
				var classA="cell"+cells[i].innerHTML;
				var classB="cell"+cells[i+4].innerHTML;
				cells[i+4].innerHTML=cells[i].innerHTML;
				cells[i].innerHTML=" ";

				
				if(cells[i+4].innerHTML!==" ")
				{
					cells[i].classList.remove(classA);
				cells[i+4].classList.add(classA);
			}

				
				
				movedown(i+4,cells,hastransform);
				
			}
			else if(cells[i+4].innerHTML===cells[i].innerHTML&&hasTranform.transform===false){
				var classA="cell"+cells[i].innerHTML;
				var classC="cell"+cells[i+4].innerHTML;
				var a=parseInt(cells[i+4].innerHTML);
				var b=parseInt(cells[i].innerHTML);
		 		var c=a+b;
		 		cells[i+4].innerHTML=c;
		 		var classB="cell"+cells[i+4].innerHTML;
		 		cells[i].innerHTML=" ";
		 		//cells[i].classList.add(classB);
				cells[i].classList.remove(classA);
				cells[i+4].classList.add(classB);
				cells[i+4].classList.remove(classC);
		 		hasTranform.transform=true;

			}
			else if(cells[i+4].innerHTML!==" "){
				movedown(i+4,cells,hastransform);

				if(cells[i+4].innerHTML===" "){
				var classA="cell"+cells[i].innerHTML;
				var classB="cell"+cells[i+4].innerHTML;
				cells[i+4].innerHTML=cells[i].innerHTML;
				cells[i].innerHTML=" ";
				
				if(cells[i+4].innerHTML!==" "){
					cells[i+4].classList.add(classA);
					cells[i].classList.remove(classA);

				}
				
				}

			}

		}
	}
	// var movedown=function ( i,cells,hastransform) {
	// 	// body...
	// 	console.log(hastransform);
	// 	if(i===0||i===4||i===8||i===12){
	// 		hasTranform=hastransform[0];
	// 	}
	// 	else if(i===1||i===5||i===9||i===13){
	// 		hasTranform=hastransform[1];
	// 	}
	// 	else if(i===3||i===6||i===10||i===14){
	// 		hasTranform=hastransform[2];
	// 	}
	// 	else if(i===4||i===7||i===11||i===15){
	// 		hasTranform=hastransform[3];
	// 	}

	// 	if(i+4<16){
	// 		if(cells[i+4].innerHTML===" "){
	// 			cells[i+4].innerHTML=cells[i].innerHTML;
	// 			cells[i].innerHTML=" ";
	// 			movedown(i+4,cells,hastransform);
				
	// 		}
	// 		else if(cells[i+4].innerHTML===cells[i].innerHTML&&hasTranform.transform===false){
	// 			var a=parseInt(cells[i+4].innerHTML);
	// 			var b=parseInt(cells[i].innerHTML);
	// 	 		var c=a+b;
	// 	 		cells[i+4].innerHTML=c;
	// 	 		cells[i].innerHTML=" ";
	// 	 		hasTranform.transform=true;

	// 		}
	// 		else if(cells[i+4].innerHTML!==" "){
	// 			movedown(i+4,cells,hastransform);

	// 			if(cells[i+4].innerHTML===" "){
	// 			cells[i+4].innerHTML=cells[i].innerHTML;
	// 			cells[i].innerHTML=" ";

	// 			}

	// 		}

	// 	}
	// }
	// var movedown=function ( i,cells,hasTranform) {
	// 	// body...
		
	// 	if(i+4<16){
	// 		if(cells[i+4].innerHTML===" "){
	// 			cells[i+4].innerHTML=cells[i].innerHTML;
	// 			cells[i].innerHTML=" ";
				
	// 		}
	// 		else if(cells[i+4].innerHTML===cells[i].innerHTML&&hasTranform.transform===false){
	// 			var a=parseInt(cells[i+4].innerHTML);
	// 			var b=parseInt(cells[i].innerHTML);
	// 	 		var c=a+b;
	// 	 		cells[i+4].innerHTML=c;
	// 	 		cells[i].innerHTML=" ";
	// 	 		hasTranform.transform=true;

	// 		}
	// 		else if(cells[i+4].innerHTML!==" "){
	// 			movedown(i+4,cells,hasTranform);

	// 			if(cells[i+4].innerHTML===" "){
	// 			cells[i+4].innerHTML=cells[i].innerHTML;
	// 			cells[i].innerHTML=" ";

	// 			}

	// 		}

	// 	}
	// }
	var ArrowUp=function (argument) {
		// body...
	}
	var ArrowLeft=function (argument) {
		// body...
	}
	var ArrowRight=function (argument) {
		// body...
	}
	

		

		
		
		
	
	
	
	
	return{
		init:init,
		
	};
})();