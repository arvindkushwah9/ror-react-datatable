import React from "react"
import PropTypes from "prop-types"
import PatientListRow from './PatientListRow';
import { MDBDataTable } from 'mdbreact';

class Patient extends React.Component {
	constructor(props) {
    super(props);    
	}

  render () {
  	const patients = this.props.patients;
  	 const allrecord = [];
      {patients.loading && <em>Loading patients</em>}
      { patients && patients.length > 0 &&
        <ul className="list-group">
          {patients.map((patient, index) =>
            <div key={index}>
              { allrecord.push({sn: index + 1, id: patient.id, name: patient.name, date: patient.date, description: patient.description })
              }
            </div>
          )}
        </ul>
      } 

  	const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 100
      }
    ],
    rows: allrecord
  };

  

    return (
    	<div>     
		  <MDBDataTable
	      striped
	      bordered
	      hover
	      data={data}
	    />
		  </div>
    );
  }
}

Patient.propTypes = {
  patients: PropTypes.array,
  tableTitle: PropTypes.string
};
export default Patient
