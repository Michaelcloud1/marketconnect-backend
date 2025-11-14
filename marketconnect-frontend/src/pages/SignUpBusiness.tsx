import React, { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const SignUpBusiness: React.FC = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("signup business", { company, name, email });
    alert("Business signup submitted (stub)");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Sign up — Business Owner</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-sm block mb-1">Company name</label>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div>
          <label className="text-sm block mb-1">Full name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="text-sm block mb-1">Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label className="text-sm block mb-1">Password</label>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Create account</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpBusiness;
