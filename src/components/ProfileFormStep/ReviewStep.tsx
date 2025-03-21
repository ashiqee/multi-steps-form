import { Field, ErrorMessage } from "formik";

export const ReviewStep = ({
  step,
  values,
  setStep,
}: {
  step: number;
  values: any;
  setStep: any;
}) => {
  return (
    <>
      {step === 4 && (
        <div className="space-y-8  bg-white p-6 rounded-lg shadow-lg">
          <div className="relative h-36 bg-gray-200 rounded-lg">
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={URL.createObjectURL(values.profileImage)}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Profile Info Section */}
          <div className=" text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              {values.fullName}
            </h2>
            <p className="text-gray-600">{values.bio}</p>
          </div>

          {/* Basic Information Preview */}
          <div className="flex justify-between items-center hover:bg-sky-100/15 border border-gray-200 shadow-lg backdrop-blur-2xl rounded-lg p-4">
            <div className="space-y-2 ">
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  Email:
                </strong>
                <p className="text-gray-600">{values.email}</p>
              </div>
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  Phone Number:
                </strong>
                <p className="text-gray-600">{values.phone}</p>
              </div>
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  Date of Birth:
                </strong>
                <p className="text-gray-600">{values.dob}</p>
              </div>
            </div>

            <button
              type="button"
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
              onClick={() => setStep(0)} // Go back to the Basic Info step
            >
              Edit Basic Info
            </button>
          </div>

          {/* Address Information Preview */}
          <div className="flex justify-between items-center hover:bg-sky-100/15 border border-gray-200 shadow-lg backdrop-blur-2xl rounded-lg p-4">
            <div className="space-y-2 ">
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  Country:
                </strong>
                <p className="text-gray-600">{values.country}</p>
              </div>
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  State:
                </strong>
                <p className="text-gray-600">{values.state}</p>
              </div>
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  City:
                </strong>
                <p className="text-gray-600">{values.city}</p>
              </div>
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  Zip Code:
                </strong>
                <p className="text-gray-600">{values.zip}</p>
              </div>
              <div className="flex gap-2 items-center">
                <strong className="text-lg font-medium text-gray-700">
                  Street Address:
                </strong>
                <p className="text-gray-600">{values.street}</p>
              </div>
            </div>
            <button
              type="button"
              className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
              onClick={() => setStep(1)} // Go back to the Address step
            >
              Edit Address
            </button>
          </div>

          {/* Social Links Preview */}
          <div className="flex justify-between items-center hover:bg-sky-100/15 border border-gray-200 shadow-lg backdrop-blur-2xl rounded-lg p-4">
            <div className="space-y-2 ">
              <div>
                <strong className="text-lg font-medium text-gray-700">
                  LinkedIn:
                </strong>
                <p className="text-gray-600">{values.linkedin}</p>
              </div>
              <div>
                <strong className="text-lg font-medium text-gray-700">
                  Twitter:
                </strong>
                <p className="text-gray-600">{values.twitter}</p>
              </div>
              <div>
                <strong className="text-lg font-medium text-gray-700">
                  Personal Website:
                </strong>
                <p className="text-gray-600">{values.website}</p>
              </div>
            </div>
            <button
              type="button"
              className="px-6 py-3 bg-slate-500 text-white rounded-md hover:bg-slate-600 transition duration-200"
              onClick={() => setStep(3)} // Go back to the Address step
            >
              Edit Social Links
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8 justify-center">
            <button
              type="button"
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
              onClick={() => {
                // Submit the data (logging it in the console for now)
                alert(
                  "Form submitted! Here are the details:\n\n" +
                    JSON.stringify(values, null, 2)
                );
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
