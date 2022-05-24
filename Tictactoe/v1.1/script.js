//Initial variables
var cell1 = document.querySelector('#cell1')
var cell2 = document.querySelector('#cell2')
var cell3 = document.querySelector('#cell3')
var cell4 = document.querySelector('#cell4')
var cell5 = document.querySelector('#cell5')
var cell6 = document.querySelector('#cell6')
var cell7 = document.querySelector('#cell7')
var cell8 = document.querySelector('#cell8')
var cell9 = document.querySelector('#cell9')
var table = document.querySelector('.table')
var main = document.querySelector('main')

var mainCell = [cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9]

//Location Variables
var A1 = ''
var A2 = ''
var A3 = ''
var B1 = ''
var B2 = ''
var B3 = ''
var C1 = ''
var C2 = ''
var C3 = ''


//External variables
var A4 = 0
var B4 = 0
var C4 = 0
var D1 = 0
var D2 = 0
var D3 = 0
var D4 = 0
var D0 = 0

//Initial numb player
var player = '1'

function playerNumber() {

    if(player == '1'){
        player = '2'
    } else if(player == '2') {
        player = '1'
    }

}

function xOrCircle(cell){

    var newDiv = document.createElement('div')
    var newDiv2 = document.createElement('div')

        if(player == '1' ){
            newDiv.setAttribute('class', 'itemCircle')
            cell.setAttribute('item', 'itemCircle' )
            cell.appendChild(newDiv)
        } else if (player == '2'){
            newDiv.setAttribute('class', 'itemX')
            cell.appendChild(newDiv)
            newDiv2.setAttribute('class', 'itemX2')
            cell.appendChild(newDiv2)
            cell.setAttribute('item', 'itemX' )
        }
             
}


//Aplication of functions in variables

/*
function verification(cell){

    cell.onclick = function (){

        if(cell.getAttribute('vrf') == '0'){
            xOrCircle(cell)
            playerNumber()
           cell.setAttribute('vrf', 1)    
        }
    }
}
*/

//a arrumar:


cell1.onclick = function (){
    
    if(cell1.getAttribute('vrf') == '0'){
        xOrCircle(cell1)
        playerNumber()
       cell1.setAttribute('vrf', 1)

       if(cell1.getAttribute('item') == 'itemCircle'){
        A1 = 1
        }else if(cell1.getAttribute('item') == 'itemX'){
        A1 = 7
        }
    }
}
cell2.onclick = function (){

    if(cell2.getAttribute('vrf') == '0'){
        xOrCircle(cell2)
        playerNumber()
       cell2.setAttribute('vrf', 1)

       if(cell2.getAttribute('item') == 'itemCircle'){
        A2 = 1
        }else if(cell2.getAttribute('item') == 'itemX'){
        A2 = 7
        }
    }
}
cell3.onclick = function (){

    if(cell3.getAttribute('vrf') == '0'){
        xOrCircle(cell3)
        playerNumber()
       cell3.setAttribute('vrf', 1)

       if(cell3.getAttribute('item') == 'itemCircle'){
        A3 = 1
        }else if(cell3.getAttribute('item') == 'itemX'){
        A3 = 7
        }
    }
}
cell4.onclick = function (){

    if(cell4.getAttribute('vrf') == '0'){
        xOrCircle(cell4)
        playerNumber()
       cell4.setAttribute('vrf', 1)

       if(cell4.getAttribute('item') == 'itemCircle'){
        B1 = 1
        }else if(cell4.getAttribute('item') == 'itemX'){
        B1 = 7
        }
    }
}
cell5.onclick = function (){

    if(cell5.getAttribute('vrf') == '0'){
        xOrCircle(cell5)
        playerNumber()
       cell5.setAttribute('vrf', 1)

       if(cell5.getAttribute('item') == 'itemCircle'){
        B2 = 1
        }else if(cell5.getAttribute('item') == 'itemX'){
        B2 = 7
        }
    }
}
cell6.onclick = function (){

    if(cell6.getAttribute('vrf') == '0'){
        xOrCircle(cell6)
        playerNumber()
       cell6.setAttribute('vrf', 1)

       if(cell6.getAttribute('item') == 'itemCircle'){
        B3 = 1
        }else if(cell6.getAttribute('item') == 'itemX'){
        B3 = 7
        }
    }
}
cell7.onclick = function (){

    if(cell7.getAttribute('vrf') == '0'){
        xOrCircle(cell7)
        playerNumber()
       cell7.setAttribute('vrf', 1)

       if(cell7.getAttribute('item') == 'itemCircle'){
        C1 = 1
        }else if(cell7.getAttribute('item') == 'itemX'){
        C1 = 7
        }
    }
}
cell8.onclick = function (){

    if(cell8.getAttribute('vrf') == '0'){
        xOrCircle(cell8)
        playerNumber()
       cell8.setAttribute('vrf', 1)

       if(cell8.getAttribute('item') == 'itemCircle'){
        C2 = 1
        }else if(cell8.getAttribute('item') == 'itemX'){
        C2 = 7
        }
    }
}
cell9.onclick = function (){

    if(cell9.getAttribute('vrf') == '0'){
        xOrCircle(cell9)
        playerNumber()
       cell9.setAttribute('vrf', 1)

       if(cell9.getAttribute('item') == 'itemCircle'){
        C3 = 1
        }else if(cell9.getAttribute('item') == 'itemX'){
        C3 = 7
        }
    }
}


table.onclick = function(){
    A4 = A1 + A2 + A3
    B4 = B1 + B2 + B3
    C4 = C1 + C2 + C3
    D0 = C1 + B2 + A3
    D1 = A1 + B1 + C1
    D2 = A2 + B2 + C2
    D3 = A3 + B3 + C3
    D4 = A1 + B2 + C3

    if(A4 == 3 || B4 == 3 || C4 == 3 || D0 == 3 || D1 == 3 || D2 == 3 || D3 == 3 || D4 == 3){
        
        main.textContent = 'Player 1 wins!'
        main.setAttribute('class', 'victory green')
        alert('Congrats! Player 1 wins!')
    }
    if(A4 == 21 || B4 == 21 || C4 == 21 || D0 == 21 || D1 == 21 || D2 == 21 || D3 == 21 || D4 == 21){
        
        main.textContent = 'Player 2 wins!'
        main.setAttribute('class', 'victory red')
        alert('Congrats! Player 2 wins!')
    }
}
