import React from 'react';
import TableApp from './Table';
// import "./App.css"

// import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
// import DataGrid, {

//     FilterPanel, FilterRow, SearchPanel, Paging, Editing, Export, Pager

// } from 'devextreme-react/data-grid';

// import { exportDataGrid } from 'devextreme/excel_exporter';
// import ExcelJS from 'exceljs';
// import saveAs from 'file-saver';


// import CustomStore from 'devextreme/data/custom_store';
// import 'whatwg-fetch';

// const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';

// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }


// const customDataSource = new CustomStore({
//     key: 'oid',
//     load: (loadOptions) => {
//         let params = '?';

//         [
//             'filter',
//             'group',
//             'groupSummary',
//             'parentIds',
//             'requireGroupCount',
//             'requireTotalCount',
//             'searchExpr',
//             'searchOperation',
//             'searchValue',
//             'select',
//             'sort',
//             'skip',
//             'take',
//             'totalSummary',
//             'userData'
//         ].forEach(function (i) {
//             if (i in loadOptions && isNotEmpty(loadOptions[i])) {
//                 params += `${i}=${JSON.stringify(loadOptions[i])}&`;
//             }
//         });
//         params = params.slice(0, -1);

//         return fetch(`https://localhost:5000/api/feedback/${params}`)
//             .then(handleErrors)
//             .then(response => response.json())
//             .then(response => {
//                 //console.log(response.result.data.length)
//                 return {
//                     data: response.result.data,
//                     totalCount: response.result.data.length,
//                     summary: response.summary,
//                     groupCount: response.result.data.length
//                 };
//             })
//         //.catch(() => { throw 'Network error' });
//     },
//     insert: (values) => {
//         console.log(values);
//         return fetch('https://localhost:5000/api/feedback', {
//             method: 'POST',
//             body: JSON.stringify(values),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(handleErrors)
//         //   .catch(() => { throw 'Network error' });
//     },
//     remove: (key) => {
//         return fetch(`https://localhost:5000/api/feedback/${encodeURIComponent(key)}`, {
//             method: 'DELETE'
//         })
//             .then(handleErrors)
//         // .catch(() => { throw 'Network error' });
//     },
//     update: (key, values) => {
//         console.log(values)
//         return fetch(`https://localhost:5000/api/feedback/${encodeURIComponent(key)}`, {
//             method: 'PUT',
//             body: JSON.stringify(values),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//     }

// });

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             showFeedBackInfo: false,
//             selectedRowNotes: ''
//         };

//         this.onSelectionChanged = this.onSelectionChanged.bind(this);
//         this.dataGridRef = React.createRef();
//         this.onExporting = this.onExporting.bind(this);


//         this.getTotalPageCount = () => {
//             return this.dataGridRef.current.instance.pageCount();
//         }
//         // this.exportGrid = () => {
//         //  const doc = new jsPDF();
//         //     const dataGrid = this.dataGridRef.current.instance;

//         //    exportDataGridToPdf({
//         //         jsPDFDocument: doc,
//         //        component: dataGrid
//         //     }).then(() => {
//         //        doc.save('Feedback.pdf');
//         //    });
//     }
function App() {
    return (
        <div>
            <TableApp />
        </div>
    )
}


//     render() {
//         return (
//             <div>

//                 <DataGrid dataSource={customDataSource} groupPaging={true} id="gridContainer" className="dx-datagrid dx-row-alt"
//                     columnsAutoWidth="true" ref={this.dataGridRef}
//                     hoverStateEnabled={true}
//                     selection={{ mode: 'single' }}
//                     onExporting={this.onExporting}
//                     onSelectionChanged={this.onSelectionChanged}
//                 >
//                     <FilterPanel visible={true} />
//                     <SearchPanel visible={true} />
//                     <FilterRow visible={true} />
//                     <Paging defaultPageSize={3} />
//                     <Pager
//                         showPageSizeSelector={true}
//                         allowedPageSizes={[2, 10, 20]}
//                         showInfo={true} />

//                     <Editing
//                         mode="row"
//                         allowUpdating={true}
//                         allowDeleting={true}
//                         allowAdding={true} />
//                     <Export enabled={true} allowExportSelectedData={true} />

//                 </DataGrid>
//                 {
//                     this.state.showFeedBackInfo &&
//                     <div id="employee-info">
//                         <p className="employee-notes">{this.state.selectedRowNotes}</p>
//                     </div>
//                 }

//             </div>
//             //<RemoteOperations groupPaging={true}>
//             // </DataGrid>
//         );
//     }

//     onSelectionChanged({ selectedRowsData }) {

//         const data = selectedRowsData[0];
//         console.log(data);

//         this.setState({
//             showFeedBackInfo: !!data,
//             selectedRowNotes: `${data.firstName} ${data.lastName} ${data.email} ${data.phoneNumber} ${data.feedBack}`,
//         });
//     }



//     onExporting(e) {
//         const workbook = new ExcelJS.Workbook();
//         const worksheet = workbook.addWorksheet('Main sheet');

//         exportDataGrid({
//             component: e.component,
//             worksheet: worksheet,
//             autoFilterEnabled: true
//         }).then(() => {
//             workbook.xlsx.writeBuffer().then((buffer) => {
//                 saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
//             });
//         });
//         e.cancel = true;
//     }
// }




export default App;

//  // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
//     // byKey: (key) => {
//     //     return fetch(`https://mydomain.com/MyDataService?id=${key}`)
//     //         .then(handleErrors);
//     // }