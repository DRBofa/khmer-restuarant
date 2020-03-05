<template>
<div>
  <center>
  

    <div class="q-gutter-md" style="max-width: 300px" >
 
      <q-input v-model="name" label="name"/><br>
      <q-input v-model="age" label="age" /><br>
      <q-btn @click="btnsave" label="submit"/>
        </div>
     
    <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      title="Treats"
      :data="customers"
      :columns="columns"
      row-key="name"
      :filter="filter"

    >
      <template v-slot:top-right>
        <q-input  debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
          <template slot="body-cell-mySlot" slot-scope="props">
        <q-tr :props="props">
        <q-td>
         
          <q-btn
          label="Edit"
          color="primary"
          />
          <q-btn
          label="Delete"
          color="primary" 
          
           @click="btndelete(props.row._id)"
          />
        </q-td>
        </q-tr>
        
      </template>
    </q-table>
  </div>
  </center>
</div>
</template>


<script>
export default {
data(){
  return{
  name:"",  
  age:"",
  customers:[],

   filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'ឈ្មេាះ',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'age', align: 'center', label: 'អាយុ', field: 'age', sortable: true },
         
           { name: 'mySlot', label: 'សកម្មភាព',align: 'left',ids: 'calories'  },
      ],
      

  };
},
mounted(){
 this.diplayCustomer();
this.findindexs();

},
  

methods:{
  btnsave(){
    let doc={
        name:this.name,
        age:this.age
    }
    Meteor.call('insertCustomer',doc)
    this.diplayCustomer();
  },
  diplayCustomer(){
    Meteor.call('findCustomer',(err,resualt)=>{
      if (resualt) {
        this.customers=resualt
        
      }
    })
  },
  btndelete(id){
Meteor.call('deleteCustomer',id)
 this.diplayCustomer();
  
  },
  findindexs(){
   
alert(this.customers.findIndex(c => c.name=='a'));
  }

}


}
</script>

<style>

</style>