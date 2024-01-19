let casillasleft=[]
let casillasright=[]
let dimensiontablero=8

function crearCasillas(){
    for(let i=0;i<64;i++){
        let casillaleft={
            x:false
        }
        let casillaright={
            x:false
        }
        casillasleft.push(casillaleft)
        casillasright.push(casillaright)
    }
}

function devolverCasilla(tablero,row,col) {
    const pos = row*dimensiontablero+col
    if(tablero==1){
        return casillasleft[pos]
    }else{
        return casillasright[pos]
    }
}

function actualizarTablero(){
    for(let i=0;i<dimensiontablero;i++){
        for(let j=0;j<dimensiontablero;j++){
            const butleft=document.getElementById("1"+"-"+i+"-"+j)
            const casillaleft=devolverCasilla(1,i,j)
            if(casillaleft.x){
                butleft.innerHTML="x"
            }else{
                butleft.innerHTML=""
            }
            const butright=document.getElementById("2"+"-"+i+"-"+j)
            const casillaright=devolverCasilla(2,i,j)
            if(casillaright.x){
                butright.innerHTML="x"
            }else{
                butright.innerHTML=""
            }
        }
    }
}

function marcarAlrededor(tablero,row,col){
    let casillatop=devolverCasilla(tablero,row-1,col)
    let casillaleft=devolverCasilla(tablero,row,col-1)
    let casillaright=devolverCasilla(tablero,row,col+1)
    let casillabottom=devolverCasilla(tablero,row+1,col)
    if(casillatop!=undefined){
        casillatop.x=true
    }
    if(casillaleft!=undefined&& col!=0){
        casillaleft.x=true
    }
    if(casillaright!=undefined&&col!=7){
        casillaright.x=true
    }
    if(casillabottom!=undefined){
        casillabottom.x=true
    }
}

function desmarcarAlrededor(tablero,row,col){
    let casillatop=devolverCasilla(tablero,row-1,col)
    let casillaleft=devolverCasilla(tablero,row,col-1)
    let casillaright=devolverCasilla(tablero,row,col+1)
    let casillabottom=devolverCasilla(tablero,row+1,col)
    if(casillatop!=undefined){
        casillatop.x=false
    }
    if(casillaleft!=undefined&& col!=0){
        casillaleft.x=false
    }
    if(casillaright!=undefined&&col!=7){
        casillaright.x=false
    }
    if(casillabottom!=undefined){
        casillabottom.x=false
    }
}

function casillaOnClick(tablero,row,col){
    if(tablero==1){
        let casillaright=devolverCasilla(1,row, col)
        let casillaleft=devolverCasilla(2, 7-row,7-col)
        marcarAlrededor(1,row,col)
        marcarAlrededor(2,7-row,7-col)
        casillaright.x=true
        casillaleft.x=true
        actualizarTablero()
        setTimeout(() => {
            casillaright.x=false
            casillaleft.x=false
            desmarcarAlrededor(1,row,col)
            desmarcarAlrededor(2,7-row,7-col)
            actualizarTablero()
          }, 2000);
        console.log(casillaright.x)
    }else{
        let casillaright=devolverCasilla(1,7-row, 7-col)
        let casillaleft=devolverCasilla(2,row,col)
        marcarAlrededor(1,7-row,7-col)
        marcarAlrededor(2,row,col)
        casillaright.x=true
        casillaleft.x=true
        actualizarTablero()
        setTimeout(() => {
            casillaright.x=false
            casillaleft.x=false
            desmarcarAlrededor(1,7-row,7-col)
            desmarcarAlrededor(2,row,col)
            actualizarTablero()
          }, 2000);
    }
}

function main(){
    console.log(devolverCasilla(1,0,0))
    crearCasillas()
    actualizarTablero()
}

main()