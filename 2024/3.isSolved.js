// cara lebih efektif
function isSolved(board) {
  // Fungsi bantu untuk memeriksa apakah ada tiga nilai yang sama
  function cekMenang(a, b, c) {
    return a !== 0 && a === b && a === c;
  }

  // Periksa baris dan kolom untuk kemenangan
  for (let i = 0; i < 3; i++) {
    if (cekMenang(board[i][0], board[i][1], board[i][2])) return board[i][0];
    if (cekMenang(board[0][i], board[1][i], board[2][i])) return board[0][i];
  }

  // Periksa diagonal
  if (cekMenang(board[0][0], board[1][1], board[2][2])) return board[0][0];
  if (cekMenang(board[0][2], board[1][1], board[2][0])) return board[0][2];

  // Periksa apakah masih ada tempat kosong
  for (let i = 0; i < 3; i++) {
    if (board[i].includes(0)) return -1;
  }

  // Jika tidak ada pemenang dan tidak ada tempat kosong, ini adalah seri
  return 0;
}

console.info(
  isSolved([
    [2, 1, 1],
    [0, 1, 1],
    [2, 2, 2],
  ])
);
