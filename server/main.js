import { Meteor } from 'meteor/meteor';
import Customer from '../import/collections/customers';
import Table from '../import/collections/tables'
import Tables from '../import/collections/tables';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    // manage Customer
    insertCustomer(doc){
      Customer.insert(doc)
      console.log('instert')
     
    },
    findCustomer(){
      let data=Customer.find().fetch();
      return data
    },

    deleteCustomer(id){
      Customer.remove(_id=id)
    },
    // manage table
     insertTable(doc){
      Tables.insert(doc)
     },
     findTable(){
       let data=Tables.find().fetch();
       return data
     },
     deleteTable(id){
       Tables.remove(_id=id)
     },
     updateTable(doc){
       let data=Tables.update({_id:doc.id},{$set:doc})
      return data
     }


  })

  
});
