import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
function createData(NAME,DATE,COMPANY,OFFER, MEETING) {
  return { NAME,DATE,COMPANY,OFFER, MEETING };
}

const rows = [
  createData( "Robert Fox", "Feb 15, 2021", "Dribbble",	"$3.500", "Scheduled"),
  createData( "Darlene Robertson", "Apr 15, 2021", "Netguru",	"$2.750", "Postponed"),
  createData( "Theresa Webb", "Mar 20, 2021", "Figma", "$4.200",	"Scheduled"),
  createData( "Kristin Watson",	"Feb 15, 2021", "Mailchimp",	"$3.500", "Not discussed"),
  createData("Cody Fisher", "Apr 10, 2021", "Webpixels",	"$1.500", "Canceled"),
  createData( "Robert Foxx", "Feb 15, 2021", "Dribbble",	"$3.500", "Scheduled"),
  createData( "Darlene Robertsonn", "Apr 15, 2021", "Netguru",	"$2.750", "Postponed"),
  createData( "Theresa Webbe", "Mar 20, 2021", "Figma", "$4.200",	"Scheduled"),
  createData( "Kristin Watsonn",	"Feb 15, 2021", "Mailchimp",	"$3.500", "Not discussed"),
  createData("Cody Fisherr", "Apr 10, 2021", "Webpixels",	"$1.500", "Canceled"),
];

const makeStyle=(MEETING)=>{
  if(MEETING === 'Scheduled')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(MEETING === 'Postponed')
  {
    return{
      background: 'rgb(93 136 99 / 47%)',
      color: '#2e422e',
    }
  }
  else if(MEETING === 'Canceled')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

const BasicTable = () => {
  return (
      <div className="Table">
      <h3>Contact List</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell align="left">DATE</TableCell>
                <TableCell align="left">COMPANY</TableCell>
                <TableCell align="left">OFFER</TableCell>
                <TableCell align="left">MEETING</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.NAME}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.NAME}
                  </TableCell>
                  <TableCell align="left">{row.DATE}</TableCell>
                  <TableCell align="left">{row.COMPANY}</TableCell>
                  <TableCell align="left">{row.OFFER}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.MEETING)}>{row.MEETING}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}

export default BasicTable;