// import {
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   NativeSelect,
//   Select,
//   TextField,
// } from "@mui/material";
// import { useFormik } from "formik";
// import React from "react";
// import "./materialui.css";
// export default function MaterialUiwithFormik() {
//   const formik = useFormik({
//     initialValues: {
//       LeadStatus: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values));
//     },
//   });

//   return (
//     <div className="container">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="frst">
//           <div>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Lead Status
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "LeadStatus",
                  leadName: "",
                  leadEmail: "",
                  leadPhoneNumber: "",
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Select Lead Status</option>
              </NativeSelect>
            </FormControl>
//           </div>
//           <div>
//             <TextField
//               fullWidth
//               id="password"
//               name="password"
//               label="LeadName"
//               type="text"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//             />
//           </div>
//         </div>
//         <div>
//           <TextField
//             fullWidth
//             id="leadEmail"
//             name="leadEmail"
//             label="leadEmail"
//             type="email"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//           />
//         </div>
//         <div>
//           <TextField
//             fullWidth
//             id="leadPhoneNumber"
//             name="leadPhoneNumber"
//             label="leadPhoneNumber"
//             type="number"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//           />
//         </div>
//         <Button color="primary" variant="contained" fullWidth type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// }



import {
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import "./materialui.css";

export default function MaterialUiwithFormik() {
  const formik = useFormik({
    initialValues: {
      LeadStatus: "",
      leadName: "",
      leadEmail: "",
      leadPhoneNumber: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="frst">
          <div>
          <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Lead Status
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "LeadStatus",
                  leadName: "",
                  leadEmail: "",
                  leadPhoneNumber: "",
                }}
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Select Lead Status</option>
              </NativeSelect>
            </FormControl>
            
          </div>
          <div>
            <TextField
              fullWidth
              id="leadName"
              name="leadName"
              label="Lead Name"
              type="text"
              value={formik.values.leadName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.leadName && Boolean(formik.errors.leadName)}
              helperText={formik.touched.leadName && formik.errors.leadName}
            />
          </div>
        </div>
        <div className="scnd">
          <div>
            <TextField
              fullWidth
              id="leadEmail"
              name="leadEmail"
              label="Lead Email"
              type="email"
              value={formik.values.leadEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.leadEmail && Boolean(formik.errors.leadEmail)}
              helperText={formik.touched.leadEmail && formik.errors.leadEmail}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="leadPhoneNumber"
              name="leadPhoneNumber"
              label="Lead Phone Number"
              type="number"
              value={formik.values.leadPhoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.leadPhoneNumber && Boolean(formik.errors.leadPhoneNumber)}
              helperText={formik.touched.leadPhoneNumber && formik.errors.leadPhoneNumber}
            />
          </div>
        </div>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
