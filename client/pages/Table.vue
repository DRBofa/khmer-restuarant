<template>
  <div >
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white" align="center">
        <div class="text-h6">បង្កើតតុ</div>
        <div class="text-subtitle2">Create Table</div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="left">
        <div class="q-pa-md">
            <div class="q-gutter-md row items-start">
               <q-input color="grey-3" label-color="orange" outlined v-model="name" label="ឈ្មេាះតុ/Table Name">
                    <template v-slot:append>
                         <q-icon name="pen" color="orange" />
                    </template>
                </q-input>
                <q-btn push color="primary" label="បញ្ជូន/Submit"  size="lg" @click="btnsave()"/>
                <q-btn push color="deep-orange" label="កែប្រែ/Edit"  size="lg" v-if="seen"  @click="bntupdate(get_id)" />
              <!--  <q-btn push color="brown-5" label="លុប/Delete"  size="lg"  @click="btndelete()"/> -->
            </div>

         </div>
      </q-card-actions>
      <!-- blog show table.......................................... -->
       <q-card-section class=" text-black" align="center">
        
 <template>
<div>
  <center>    
    <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xs"
      title="បញ្ជីគ្រប់គ្រងតុ/List Table"
      :data="customers"
      :columns="columns"
      row-key="name"
      :filter="filter"
     :rows-per-page-options="[0]"

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
          label="កែប្រែ/Edit"
          color="primary"
           @click="loaddata(props.row.name,props.row._id)"
          />
          <q-btn
          
          
          label="លុប/Delete"
          color="red" 
          
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


      </q-card-section>

      <!--......................................end........................-->
    </q-card>

  </div>
 
</template>

<!---------------javascript------------ -->
<script>
export default {
data(){
  return{
  get_id:"",
  seen:false,
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
        { name: 'age', align: 'center', label: '', field: 'age', sortable: true },
         
           { name: 'mySlot', label: '  ',align: 'left',ids: 'calories'  },
      ],
      

  };
},
mounted(){
 this.diplayCustomer();

},
  

methods:{
  btnsave(){
   
    if(this.name==""){
      alert('សូមបញ្ចូលឈ្មេាះតុ')
    }else{
      let doc={
        name:this.name,

    }
    Meteor.call('insertTable',doc)
    this.diplayCustomer();
    }
  },
  diplayCustomer(){
    Meteor.call('findTable',(err,resualt)=>{
      if (resualt) {
        this.customers=resualt
        
      }
    })
  },
  btndelete(id){
    var result = confirm("តើអ្នកចង់លុបមែនទេ?");
if (result) {
    //Logic to delete the item

Meteor.call('deleteTable',id)
 this.diplayCustomer();
 }
  
  },
  loaddata(name,id){
   this.seen=true;
   this.name=name;
   this.get_id=id;
    
  },
  bntupdate(id){
  //this.seen=false;
  //this.name="";
 //alert(this.get_id);
  
   doc={
     id:this.get_id,
     name:this.name
   }
       var result = confirm("តើអ្នកចង់កែប្រែមែនទេ?");
if (result) {
   Meteor.call('updateTable',doc,(err,resulte)=>{
     if(resulte){
     
     this.seen=false;
     this.name="";
     this.diplayCustomer();
     alert("ជោគជ័យ")
     }
   })
  }
  },
  findindexs(){
   
alert(this.customers.findIndex(c => c.name=='a'));
  }

}


}
</script>