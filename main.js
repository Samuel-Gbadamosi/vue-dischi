var app = new Vue({
  el:'#app',
  data:{
    pictures :[],
    genereAc:'all'
  },
  mounted(){
    axios.
    get('https://flynn.boolean.careers/exercises/api/array/music').then((result) =>{
     this.pictures = result.data.response;
     console.log(this.pictures);

    })
    .catch(error =>{
      console.log('error');
    })
  },
  methods:{

    selectores(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((result) =>{
     let filterPics = result.data.response;
      console.log(this.filterPics);

      // will try to apply the function to select bonus later if possoble


    })


  }
  }
});
