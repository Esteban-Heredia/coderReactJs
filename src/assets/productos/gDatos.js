let productos = [
    { id: "1", categoria: "Tinta", color: 'Negro', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta1.webp" },
    { id: "2", categoria: "Tinta", color: 'Rojo', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta2.webp" },
    { id: "3", categoria: "Tinta", color: 'Morado', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta3.webp" },
    { id: "4", categoria: "Tinta", color: 'Petroleo', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta4.webp" },
  { id: "5", categoria: "Tinta", color: 'Amarillo', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta5.webp" },
  { id: "6", categoria: "Tinta", color: 'Verde', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta6.webp" },
  { id: "7", categoria: "Tinta", color: 'Azul', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta7.webp" },
  { id: "8", categoria: "Tinta", color: 'Celeste', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta8.webp" },
  { id: "9", categoria: "Tinta", color: 'Rosa', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta9.webp" },
  { id: "10", categoria: "Tinta", color: 'Verde oscuro', nombre: 'Tinta Color', precio: "3500", foto: "../src/assets/img/tinta10.webp" },
  { id: "11", categoria: "descartable", nombre: 'guante', precio: "5500", foto: "../src/assets/img/guante1.webp" },
  { id: "12", categoria: "descartable", nombre: 'guante', precio: "5500", foto: "../src/assets/img/guante2.webp" },
  { id: "13", categoria: "descartable", nombre: 'guante', precio: "5500", foto: "../src/assets/img/guante3.jpg" },
  { id: "14", categoria: "agujas", nombre: 'aguajas', precio: "3200", foto: "../src/assets/img/agujas.webp" },
];

const gDatos = () => {
    return new Promise ((res)=>{
        setTimeout (()=> {
            res( productos )
        }, 1500)
    })
}
export default gDatos;