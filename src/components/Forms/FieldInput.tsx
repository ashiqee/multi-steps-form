import { ErrorMessage, Field } from "formik";

const FieldInput = ({ name, label, placeholder, type = "text",as }:{name: string, label: string, placeholder?: string, type?: string , as?:string}) => (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium capitalize text-gray-700">
        {label}
      </label>
      <Field
        id={name}
        as={as}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );


  export default FieldInput;