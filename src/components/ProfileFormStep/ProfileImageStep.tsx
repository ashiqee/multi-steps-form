import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import FieldInput from "../Forms/FieldInput";
import Image from "next/image";

export const ProfileImageStep = ({
  step,
  setFieldValue,
}: {
  step: number;
  setFieldValue: any;
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
    if (file) {
      
      setFieldValue("profileImage", file);

      //  image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {step === 2 && (
        <div className="space-y-6">
          {/* Image Upload */}
          <div className="flex flex-col gap-3">
            <label htmlFor="profileImage" className="label-class">
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="input-field"
            />
            {imagePreview && (
              <div className="mt-4 flex justify-center">
                <Image
                  className="w-32 h-32 object-cover rounded-full"
                  width={1800}
                  height={1800}
                  src={imagePreview}
                  alt="Profile Preview"
                />
              </div>
            )}
            <ErrorMessage
              name="profileImage"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Short Bio */}
          <FieldInput
            name="bio"
            label="Short Bio"
            placeholder="Write a short bio..."
            as="textarea"
          />
        </div>
      )}
    </>
  );
};
