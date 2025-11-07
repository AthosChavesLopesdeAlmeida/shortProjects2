// const horse = document.getElementById('horse');
// const board = document.getElementById('chessBoard');
// const whiteSq = document.getElementsByClassName('whiteSquare');
// const blackSq = document.getElementsByClassName('blackSquare');
// Interatividade mais tarde!!

function Node(posit, path) {
  if (posit[0] < 0 || posit[0] > 7 || posit[1] < 0 || posit[1] > 7) {
    return null;
  }
  return { posit, path };
}


function knightMoves(start, end) { 
  let queue = [Node([start[0], start[1]], [[start[0], start[1]]])];  // Cria uma queue com a posição atual e um array com o caminho já percorrido
  let currentNode = queue.shift(); // currentNode é a posição atual (acima)

  // Considera se existe um currentNode e se ele não chegou na posição final. Então, considera os movimentos possíveis
  while (currentNode && (currentNode.posit[0] !== end[0] || currentNode.posit[1] !== end[1])) {
    let possibleMoves = [
      [currentNode.posit[0] + 2, currentNode.posit[1] - 1],
      [currentNode.posit[0] + 2, currentNode.posit[1] + 1],
      [currentNode.posit[0] - 2, currentNode.posit[1] - 1],
      [currentNode.posit[0] - 2, currentNode.posit[1] + 1],
      [currentNode.posit[0] + 1, currentNode.posit[1] - 2],
      [currentNode.posit[0] + 1, currentNode.posit[1] + 2],
      [currentNode.posit[0] - 1, currentNode.posit[1] - 2],
      [currentNode.posit[0] - 1, currentNode.posit[1] + 2],
    ];

    // Para cada movimento, cria um newNode e coloca na queue (aumentando o path)
    possibleMoves.forEach((move) => {
      let newNode = Node(move, currentNode.path.concat([move]))
      if (newNode) {
        queue.push(newNode);
      }
    });

    // Reescreve o node atual
    currentNode = queue.shift();
  };

  console.log(`Você conseguiu chegar ao objetivo em ${currentNode.path.length -1} movimentos`);

  currentNode.path.forEach((posit) => {
    console.log(posit);
  });
}

knightMoves([3, 3], [4, 3])