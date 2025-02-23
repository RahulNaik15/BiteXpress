import menu_1 from './menu_1.avif'
import menu_2 from './menu_2.avif'
import menu_3 from './menu_3.avif'
import menu_4 from './menu_4.avif'
import menu_5 from './menu_5.avif'
import menu_6 from './menu_6.avif'
import menu_7 from './menu_7.avif'
import menu_8 from './menu_8.avif'

import salad_1 from './caesar_salad.webp'
import salad_2 from './greek_salad.webp'
import salad_3 from './chicken_salad.webp'
import salad_4 from './leafy_green.webp'

import roll_1 from './chicken_roll.png'
import roll_2 from './malaitikka_roll.png'
import roll_3 from './mutton_roll.png'
import roll_4 from './soya_roll.png'
import roll_5 from './spring_roll.png'
import roll_6 from './paneer_roll.png'
import roll_7 from './veg_roll.png'

import biryani_1 from './hyderabadi.webp'
import biryani_2 from './lucknowi.webp'
import biryani_3 from './kolkata.avif'
import biryani_4 from './veg.avif'

import burger_1 from './classic_burger.webp'
import burger_2 from './cheese_burger.webp'
import burger_3 from './spicy_burger.webp'
import burger_4 from './special_burger.webp'
import burger_5 from './veggie_burger.webp'
import burger_6 from './paneer_burger.webp'

import cake_1 from './black_forest.jpg'
import cake_2 from './caramel_cake.webp'
import cake_3 from './cake_3.webp'
import cake_4 from './cake_4.webp'
import cake_5 from './mango_cake.png'
import cake_6 from './chocolate_pastry.webp'
import cake_7 from './pineapple_pastry.jpeg'

import veg_1 from './rajma_chawal.jpg'
import veg_2 from './mixveg.jpg'
import veg_3 from './mushroom_masala.jpg'
import veg_4 from './panner_curry.jpg'
import veg_5 from './kadhi_pakoda.jpg'
import veg_6 from './veg_thali.jpeg'

import pasta_1 from './Spaghetti_pasta.jpg'
import pasta_2 from './macaroni_pasta.jpg'
import pasta_3 from './penne_pasta.png'
import pasta_4 from './fusilli_pasta.jpg'

import noodles_1 from './chicken_noodles.jpg'
import noodles_2 from './chow_mein_noodles.webp'
import noodles_3 from './egg_noodles.jpg'
import noodles_4 from './garlic_noodles.jpg'
import noodles_5 from './hakka_noodles.jpg'
import noodles_6 from './veg_noodles.jpg'

import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import iphone from './apple.avif'
import android from './android.avif'
export{icon1,icon2,icon3,iphone,android}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Biryani",
        menu_image: menu_3
    },
    {
        menu_name: "Burgers",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    },
]

export const food_list = [
    {
        _id: "1",
        name: "Greek Salad",
        image: salad_1,
        price: 150,
        rating: 4.5,
        description: "This Greek salad recipe is perfect for summer when tomatoes and cucumbers taste best.",
        category:"Salad"
    },
     {
        _id: "2",
        name: "Veg Salad",
        image: salad_2,
        rating: 4.0,
        price: 100,
        description: "Veg salad is a healthy mix of fresh vegetables, herbs, lemon juice, and seasonings.",
        category:"Salad"
    },
     {
        _id: "3",
        name: "Chicken Salad",
        image: salad_3,
        rating: 4.2,
        price: 120,
        description: "Chicken salad is a flavorful mix of grilled chicken, fresh vegetables, herbs, dressing, and spices.",
        category:"Salad"
    },
       {
        _id: "4",
        name: "Leafy Green Salad",
        image: salad_4,
        rating: 3.9,
        price: 80,
        description: "Leafy green salad includes fresh lettuce, spinach, kale, herbs, dressing, and seasonings.",
        category:"Salad"
    },
    

       {
        _id: "5",
        name: "Chicken Roll",
        image: roll_1,
        rating: 4.8,
        price: 120,
        description: "Chicken roll is a delicious wrap filled with spiced chicken, vegetables, sauces, and spices.",
        category:"Rolls"
    },
       {
        _id: "6",
        name: "Malai Tikka Roll",
        image: roll_2,
        rating: 4.1,
        price: 100,
        description: "Malai tikka roll is a creamy, flavorful wrap with marinated chicken, spices, and sauces.",
        category:"Rolls"
    },
       {
        _id: "7",
        name: "Mutton Roll",
        image: roll_3,
        rating: 4.5,
        price: 140,
        description: "Mutton roll is a spicy wrap filled with tender mutton, herbs, sauces, and seasonings.",
        category:"Rolls"
    },
        {
        _id: "8",
        name: "Soya Chaap Roll",
        image: roll_4,
        rating: 3.9,
        price: 90,
        description: "Soya chaap roll is a delicious wrap with marinated soya chaap, spices, vegetables, and sauces.",
        category:"Rolls"
    },
     {
        _id: "9",
        name: "Spring Roll",
        image: roll_5,
        rating: 4,
        price: 100,
        description: "Spring roll is a crispy, thin pastry filled with vegetables, noodles, and flavorful spices.",
        category:"Rolls"
    },
       {
        _id: "10",
        name: "Paneer Roll",
        image: roll_6,
        rating: 4.4,
        price: 125,
        description: "Paneer roll is a tasty wrap filled with spiced paneer, vegetables, sauces, and seasonings.",
        category:"Rolls"
    },
       {
        _id: "11",
        name: "Veg Roll",
        image: roll_7,
        rating: 4.2,
        price: 110,
        description: "Veg roll is a delicious wrap filled with spiced vegetables, herbs, sauces, and seasonings.",
        category:"Rolls"
    },

       
       {
        _id: "12",
        name: "Hyderabadi Biryani",
        image: biryani_1,
        rating: 4.8,
        price: 140,
        description: "Hyderabadi Biryani is a fragrant, flavorful dish made with aromatic spices and marinated chicken.",
        category:"Biryani"
    },
        {
        _id: "13",
        name: "Lucknowi Biryani",
        image: biryani_2,
        rating: 4.5,
        price: 150,
        description: "Lucknowi Biryani is a fragrant, mildly spiced rice dish with tender meat and rich flavors.",
        category:"Biryani"
    },
        {
        _id: "14",
        name: "Kolkata Biryani",
        image: biryani_3,
        rating: 4.1,
        price: 130,
        description: "Kolkata Biryani is a flavorful rice dish with fragrant spices, potatoes, and juicy chicken.",
        category:"Biryani"
    },
         {
        _id: "15",
        name: "Veg Biryani",
        image: biryani_4,
        rating: 4.2,
        price: 110,
        description: "Veg Biryani is a delicious rice dish made with mixed vegetables, aromatic spices, and saffron.",
        category:"Biryani"
    },
         
        {
        _id: "16",
        name: "Classic Burger",
        image: burger_1,
        rating: 4.2,
        price: 80,
        description: "A simple burger with a juicy patty, lettuce, onions, tomato, and basic sauces.",
        category:"Burgers"
    }, 
        {
        _id: "17",
        name: "Cheese Burger",
        image: burger_2,
        rating: 4.4,
        price: 120,
        description: "A delicious burger with a cheesy patty, melted cheese, and fresh toppings.",
        category:"Burgers"
    }, 
        {
        _id: "18",
        name: "Spicy Burger",
        image: burger_3,
        rating: 4.3,
        price: 100,
        description: "A fiery burger with a spiced patty, jalapeños, red capsicum chilly and hot sauces.",
        category:"Burgers"
    }, 
        {
        _id: "19",
        name: "Special Burger",
        image: burger_4,
        rating: 4.0,
        price: 130,
        description: "A unique burger with extra toppings, signature sauces, and a gourmet touch.",
        category:"Burgers"
    }, 
        {
        _id: "20",
        name: "Veggie Burger",
        image: burger_5,
        rating: 3.8,
        price: 80,
        description: "Veggie burger is a healthy burger with a vegetable patty, lettuce, and creamy dressing.",
        category:"Burgers"
    }, 
         {
        _id: "21",
        name: "Paneer Burger",
        image: burger_6,
        rating: 4.3,
        price: 125,
        description: "A flavorful burger with crispy paneer patty, veggies, tangy and creamy sauces.",
        category:"Burgers"
    }, 
         
        {
        _id: "22",
        name: "Black Forest",
        image: cake_1,
        rating: 4.4,
        price: 350,
        description: "A rich chocolate cake layered with whipped cream and cherries toppings.",
        category:"Cake"
    }, 
         {
        _id: "23",
        name: "Caramel Cake",
        image: cake_2,
        rating: 4.2,
        price: 290,
        description: "A soft, moist cake with caramel flavor and drizzled caramel cream with nuts.",
        category:"Cake"
    }, 
          {
        _id: "24",
        name: "Fruit Cake",
        image: cake_3,
        rating: 4.0,
        price: 300,
        description: " A delicious cake loaded with dried fruits, figs nuts, berries and warm spices.",
        category:"Cake"
    }, 
           {
        _id: "25",
        name: "White Chocolate",
        image: cake_4,
        rating: 4.4,
        price: 360,
        description: "A creamy, smooth cake made with white chocolate and vanilla flavors loaded with cherry and chocolate.",
        category:"Cake"
    }, 
            {
        _id: "26",
        name: "Mango Cake",
        image: cake_5,
        rating: 4.2,
        price: 400,
        description: "A best seller tropical-flavored cake with fresh mango puree and whipped cream .",
        category:"Cake"
    }, 
             {
        _id: "27",
        name: "Chocolate Pastry",
        image: cake_6,
        rating: 4.5,
        price: 80,
        description: " A rich, creamy pastry made with layers of chocolate sponge and ganache.",
        category:"Cake"
    }, 
     {
        _id: "28",
        name: "Pineapple Pastry",
        image: cake_7,
        rating: 4.3,
        price: 70,
        description: "A light, fluffy and delicious pastry with pineapple-flavored sponge and whipped cream.",
        category:"Cake"
    }, 
     
     {
        _id: "29",
        name: "Rajma Chawal",
        image: veg_1,
        rating: 4.5,
        price: 100,
        description: " A comforting dish of kidney bean curry served with steamed rice and onions.",
        category:"Pure Veg" 
    }, 
     {
        _id: "30",
        name: "Mix Veg",
        image: veg_2,
        rating: 4.3,
        price: 70,
        description: "A flavorful curry made with a mix of seasonal vegetables and aromatic spices.",
        category:"Pure Veg" 
    }, 
     {
        _id: "31",
        name: "Mushroom Masala",
        image: veg_3,
        rating: 4.5,
        price: 100,
        description: "A rich, creamy curry made with mushrooms, onions, tomatoes, and spices.",
        category:"Pure Veg" 
    }, 
     {
        _id: "32",
        name: "Paneer Masala",
        image: veg_4,
        rating: 4.1,
        price: 85,
        description: "A delicious paneer-based curry cooked in a spicy and creamy gravy with different spices.",
        category:"Pure Veg" 
    }, 
     {
        _id: "33",
        name: "Kadhi Pakoda",
        image: veg_5,
        rating: 4.2,
        price: 65,
        description: "A tangy yogurt-based curry with gram flour fritters, tempered with spices.",
        category:"Pure Veg" 
    }, 
     {
        _id: "34",
        name: "Veg Thali",
        image: veg_6,
        rating: 4.4,
        price: 250,
        description: "A wholesome meal platter with dal, two sabzi, rice, roti, papad, salad, and dessert.",
        category:"Pure Veg" 
    }, 
        
     
     {
        _id: "35",
        name: "Spaghetti",
        image: pasta_1,
        rating: 4.2,
        price: 170,
        description: "Long, thin pasta strands served with rich sauces, vegetables, herbs, or meat.",
        category:"Pasta" 
    }, 
     {
        _id: "36",
        name: "Macaroni",
        image: pasta_2,
        rating: 4.3,
        price: 150,
        description: "Small, curved pasta tubes, perfect for creamy, cheesy, or baked dishes flavoured with sauces.",
        category:"Pasta" 
    }, 
     {
        _id: "37",
        name: "Penne",
        image: pasta_3,
        rating: 4.4,
        price: 140,
        description: "Cylindrical, ridged pasta, ideal for thick, creamy, or tomato-based sauces.",
        category:"Pasta" 
    }, 
     {
        _id: "38",
        name: "Fusilli",
        image: pasta_4,
        rating: 4.0,
        price: 120,
        description: "Spiral-shaped pasta that holds sauces well, great for salads and baked dishes.",
        category:"Pasta" 
    }, 
     
     {
        _id: "39",
        name: "Chicken Noodles",
        image: noodles_1,
        rating: 4.5,
        price: 150,
        description: "Stir-fried noodles with tender chicken, vegetables, and flavorful sauces.",
        category:"Noodles" 
    }, 
     {
        _id: "40",
        name: "Chowmein Noodles",
        image: noodles_2,
        rating: 4.2,
        price: 100,
        description: "Spicy stir-fried noodles with vegetables, sauces, and optional protein.",
        category:"Noodles" 
    }, 
     {
        _id: "41",
        name: "Egg Noodles",
        image: noodles_3,
        rating: 4.0,
        price: 110,
        description: "Soft, chewy noodles made with eggs, stir-fried with sauces and vegetables and onions.",
        category:"Noodles" 
    }, 
     {
        _id: "42",
        name: "Garlic Noodles",
        image: noodles_4,
        rating: 3.7,
        price: 90,
        description: "Flavorful noodles tossed with garlic, butter, eggs, vegetables, soy sauce, and herbs.",
        category:"Noodles" 
    }, 
     {
        _id: "43",
        name: "Hakka Noodles",
        image: noodles_5,
        rating: 4.1,
        price: 135,
        description: "Indo-Chinese stir-fried noodles with vegetables, soy sauce, and chili flavors.",
        category:"Noodles" 
    }, 
      {
        _id: "44",
        name: "Veg Noodles",
        image: noodles_6,
        rating: 4.1,
        price: 100,
        description: "Stir-fried noodles with mixed vegetables, soy sauce, and aromatic spices.",
        category:"Noodles" 
    }, 
]
 

