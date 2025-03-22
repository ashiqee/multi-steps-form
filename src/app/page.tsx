"use client";

import { useState } from "react";
import { Formik, Form,  } from "formik";
import * as Yup from "yup";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import { Card, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Progress } from "@heroui/progress";
import FieldInput from "@/components/Forms/FieldInput";
import { ProfileImageStep } from "@/components/ProfileFormStep/ProfileImageStep";
import { ReviewStep } from "@/components/ProfileFormStep/ReviewStep";
import { updateForm, resetForm } from "@/lib/Redux/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/Redux/store";

const steps = [
  "Basic Info",
  "Address",
  "Profile Image",
  "Social Links",
  "Review & Submit",
];

const validationSchemas = [
  Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Only numbers allowed")
      .required("Phone is required"),
    dob: Yup.date().required("Date of Birth is required"),
  }),
  Yup.object({
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    zip: Yup.string()
      .matches(/^\d+$/, "Only numbers allowed")
      .required("Zip Code is required"),
    street: Yup.string().required("Street Address is required"),
  }),
  Yup.object({
    profileImage: Yup.mixed().required("Profile image is required"),
    bio: Yup.string(),
  }),
  Yup.object({
    linkedin: Yup.string().url("Invalid URL"),
    twitter: Yup.string().url("Invalid URL"),
    website: Yup.string().url("Invalid URL"),
  }),
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.profileData);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);



  const handleSubmit = (values: any) => {
    dispatch(updateForm(values));
    if (step === steps.length - 1) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Final Data:", values);
        alert("Form submitted successfully!");
        dispatch(resetForm());
        setIsSubmitting(false);
      }, 2000);
    } else {
      handleNext();
    }
  };

  return (
    <div className=" bg-white">
      {/* Navbar */}
      <HeroUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-white shadow-md"
      >
        <NavbarContent>
          <NavbarBrand>Multi-Step Form</NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center" className="hidden md:flex">
          {steps.map((title, index) => (
            <span
              key={index}
              className={`mx-2 text-sm font-semibold ${
                index === step ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {title}
            </span>
          ))}
        </NavbarContent>
        
    
     
      </HeroUINavbar>
        {/* Progress Bar */}
        <Progress
        value={(step / (steps.length - 1)) * 100}
        className="w-full h-2 bg-blue-200  fixed top-16 left-0 z-50"
      />


      <div className="flex justify-center items-center min-h-[80vh]">
        <Card className={`w-full ${step === 4 ? "max-w-5xl m-4" : "max-w-xl bg-white shadow-lg rounded-lg p-6"} `}>
          {/* <CardHeader className=" text-2xl w-full font-bold">
            <h2 className="text-center">{steps[step]}</h2>
          </CardHeader> */}
          <div>
            <Formik
                initialValues={{ 
                  fullName: formData.fullName || "",
                  email: formData.email || "",
                  phone: formData.phone || "",
                  dob: formData.dob || "",
                  country: formData.country || "",
                  city: formData.city || "",
                  zip: formData.zip || "",
                  address: formData.address || "",
                  profileImage: formData.profileImage || null,
                  bio: formData.bio || "",
                  linkedin: formData.linkedin || "",
                  twitter: formData.twitter || "",
                  website: formData.website || "",
                }}
              onSubmit={handleSubmit}
              validationSchema={validationSchemas[step]}
            >
              {({ setFieldValue, values }) => (
                <Form className="space-y-4">
                  {/* Step 1: Basic Info */}
                  {step === 0 && (
                    <>
                      <div className="space-y-4">
                        <FieldInput
                          name="fullName"
                          label="Full Name"
                          placeholder="Enter your full name"
                        />
                        <FieldInput
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="Enter your email"
                        />
                        <FieldInput
                          name="phone"
                          label="Phone"
                          type="phone"
                          placeholder="Enter your phone number"
                        />
                        <FieldInput
                          name="dob"
                          label="Date of Birth"
                          type="date"
                          placeholder="Enter your date of birth"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 2: Address */}
                  {step === 1 && (
                    <>
                      <div className="space-y-4 w-full">
                        <div className="flex space-x-4">
                          <FieldInput
                            name="country"
                            label="Country"
                            placeholder="Enter your country name"
                          />
                          <FieldInput
                            name="state"
                            label="State"
                            placeholder="Enter your state"
                          />
                        </div>
                        <div className="flex space-x-4">
                          <FieldInput
                            name="city"
                            label="city"
                            placeholder="Enter your city"
                          />
                          <FieldInput
                            name="zip"
                            label="zip"
                            placeholder="Enter your zip code"
                          />
                        </div>
                        <FieldInput
                          name="address"
                          label="Street Address"
                          placeholder="Enter your Street Address"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 3: Profile Image */}
                  <ProfileImageStep step={step} setFieldValue={setFieldValue} />

                  {/* Step 4: Social Links */}
                  {step === 3 && (
                    <>
                      <div className="space-y-4">
                        <FieldInput
                          name="linkedin"
                          label="LinkedIn URL"
                          placeholder="Enter your LinkedIn URL"
                        />
                        <FieldInput
                          name="twitter"
                          label="Twitter URL"
                          placeholder="Enter your Twitter URL"
                        />
                        <FieldInput
                          name="website"
                          label="Personal Website"
                          placeholder="Enter your personal website"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 5: Review & Submit */}
              <ReviewStep step={step} values={values} setStep={setStep} />

                  {/* Buttons */}
                {
                  step !== 4 && (
                    <div className="flex justify-between mt-4">
                    {step > 0 && (
                      <Button onPress={handleBack} variant="ghost">
                        Back
                      </Button>
                    )}
                    <Button type="submit">
                      {step === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                  )
                 }
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </div>
    </div>
  );
}
