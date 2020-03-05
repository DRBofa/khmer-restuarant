<template>
<div>
<div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      
     
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
           @click="bntdelete(props.row.name)"
          />
        </q-td>
        </q-tr>
        
      </template>
    </q-table>
    
  </div>
</div>

</template>

<script>
export default {
  name: "HelloWorld",
  index:"",
  data () {
    return {
      ids:"",
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'index', align: 'center', label: 'index', field: 'index', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
          
        { name: 'mySlot', label: 'My Slot',align: 'left',ids: 'calories'  },
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
      
        },
      ]
    }
  },
  methods:{
    bntdelete(id){
      alert(id)
    }
  }
};
</script>

