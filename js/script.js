//Criando Array
matriz = new Array();
corTd = new Array();

const tabela = document.querySelector(".tabela");

//Criando Matriz 3x3
matriz = [['P','E','D','R','O','B','R','U','N','O'],
          ['G','X','L','X','N','J','A','A','G','A'],
          ['A','V','Z','D','E','Z','N','D','I','N'],
          ['B','W','A','I','W','P','O','E','O','D'],
          ['R','B','Y','I','X','O','I','R','R','O'],
          ['I','M','O','H','G','G','R','L','G','F'],
          ['E','R','A','E','T','D','A','V','I','D'],
          ['L','T','I','N','A','W','M','M','A','F'],
          ['Y','D','E','V','E','R','T','O','N','R'],
          ['A','R','T','U','R','O','H','K','S','R']];

corTd=[[1,1,1,1,1,2,2,2,2,2],
       [2,0,0,8,7,0,6,5,3,4],
       [2,0,0,8,2,0,6,5,3,4],
       [2,0,9,8,7,2,3,5,3,4],
       [2,10,0,9,0,1,2,5,3,4],
       [2,0,10,0,1,0,3,2,3,0],
       [2,0,0,1,0,1,1,1,3,1],
       [2,0,1,0,10,0,3,0,3,2],
       [0,1,2,2,2,2,2,2,3,0],
       [3,3,3,3,3,3,0,0,0,0]];

// Apartir daqui ele le
for(linha = 0; linha < 10; linha++)
{   
    tr = document.createElement("tr");
    for(coluna = 0; coluna < 10; coluna++)
    {
        td = document.createElement("td");

        switch(corTd[linha][coluna])
        {
            case 1:
                td.style.background = "red";
                td.append(matriz[linha][coluna]);
                tr.append(td);
            break;
            case 2:
                td.style.background = "#000000";
                td.append(matriz[linha][coluna]);
                tr.append(td);
            break;
            case 3:
                td.style.cssText = "background: #FDFFFC;" + "color: #000000;";
                td.append(matriz[linha][coluna]);

                tr.append(td);

            break;

            default:
                td.append(matriz[linha][coluna]);
                tr.append(td);
            break; 
        }
    }

    tabela.appendChild(tr);
}