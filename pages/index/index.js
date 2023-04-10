Page({
  data: {
    cuadro: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    valor: '',
    contador: 0,
    jugador: 1
  },
  campo(e) {
    let celda = [e.currentTarget.dataset.col, e.currentTarget.dataset.row];
   
      if (this.data.cuadro[celda[0]][celda[1]] === '') {
        if ((this.data.contador % 2) === 0) {
          this.setData({
            contador: this.data.contador + 1,
            valor: 'X',
            jugador: 2
          })
          this.data.cuadro[celda[0]][celda[1]] = this.data.valor;
        } else {
          this.setData({
            contador: this.data.contador + 1,
            valor: 'O',
            jugador: 1
          })
          this.data.cuadro[celda[0]][celda[1]] = this.data.valor;
        }
      }

    this.setData({
      cuadro: this.data.cuadro
    });
  
    let aux = this.data.cuadro;    

      if(aux[0][0] != '' && aux[0][0] == aux[0][1] && aux[0][1] == aux[0][2]){
        this.jugadorGanador()   
              }else if(aux[1][0] != '' && aux[1][0] == aux[1][1] && aux[1][1] == aux[1][2]){
        this.jugadorGanador() 
              }else if(aux[2][0] != '' && aux[2][0] == aux[2][1] && aux[2][1] == aux[2][2]){
        this.jugadorGanador() 
              }else if(aux[0][0] != '' && aux[0][0] == aux[1][0] && aux[1][0] == aux[2][0]){
        this.jugadorGanador() 
              } else if(aux[0][1] != '' && aux[0][1] == aux[1][1] && aux[1][1] == aux[2][1]){
        this.jugadorGanador() 
            } else if(aux[0][2] != '' && aux[0][2] == aux[1][2] && aux[1][2] == aux[2][2]){
        this.jugadorGanador() 
              }else if(aux[0][0] != '' && aux[0][0] == aux[1][1] && aux[1][1] == aux[2][2]){
        this.jugadorGanador() 
              }  else if(aux[0][2] != '' && aux[0][2] == aux[1][1] && aux[1][1] == aux[2][0]){
        this.jugadorGanador() 
              }  
      
      
  },

  reiniciar(){
    this.setData({
      cuadro: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      valor: '',
      contador: 0,
      jugador: 1
    })

  },

  jugadorGanador(){
    let gan;
    if(this.data.jugador == 1){
      gan = 2;
    }else{
      gan = 1;
    }

    my.confirm({
      title: 'Ganador',
      content: 'Gano el jugador:' + gan,
      confirmButtonText: 'Nuevo Juego ' ,      
      success: (result) => {       
        if(result.confirm === true){
          this.reiniciar();
        }
        
      },
    });
   
  }

});