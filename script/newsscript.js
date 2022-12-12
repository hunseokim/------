var yeardata = [
    ["K-pop", "한국음식", "IT 산업", "드라마", "미용"],
    ["K-pop", "한국음식", "IT 산업", "드라마", "미용"],
    ["한국음식", "K-pop", "IT 산업", "드라마", "북한"],
    ["K-pop", "북한", "IT 산업", "드라마", "한국음식"],
    ["K-pop", "한국음식", "IT 산업", "드라마", "뷰티"],
    ["K-pop", "한국음식", "드라마", "IT 산업", "한류스타"],
    ["K-pop", "한국음식", "IT 제품", "한류스타", "드라마"],
    ["K-pop", "한국음식", "드라마", "한류스타", "IT 제품"]
];

function toDOM(year) {
    var tr = '';
    tr += '<tr>';
    tr += '  <td>' + yeardata[year][0] + '</td>';
    tr += '  <td>' + yeardata[year][1] + '</td>';
    tr += '  <td>' + yeardata[year][2] + '</td>';
    tr += '  <td>' + yeardata[year][3] + '</td>';
    tr += '  <td>' + yeardata[year][4] + '</td>';
    tr += '</tr>';
    return tr;
}

function handleOnChange(e) {
    // 선택된 데이터 가져오기
    const value = e.value;
    // 데이터 출력
    document.getElementById('console').innerHTML
        = toDOM(value)
}

