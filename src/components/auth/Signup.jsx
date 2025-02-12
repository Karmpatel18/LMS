import { useState } from "react";
import CoolMode from "../CoolMode";
import BorderBeam from "../BorderBeam";
function Signup() {
    const [formData, setFormData] = useState({
        enrollment: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
    };

    return (
        <div className="flex justify-center font-poppins mt-28">
            
                <div className="relative bg-neutral-50 text-neutral-900 p-3 rounded-lg    h-min w-96">
                
                    <div className="text-5xl font-semibold   tracking-tighter mb-4 leading-16 mt-2 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent">&#42;SignIn</div>
                    <form onSubmit={handleSubmit} className="space-y-3 mt-12">
                        {/* Enrollment Number */}
                        <div>
                            <label className="flex text-sm text-neutral-400 font-normal tracking-tighter">username</label>
                            <input
                                type="text"
                                name="enrollment"
                                value={formData.enrollment}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder:text-sm  border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                placeholder="Enter your Enrollment Number"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="flex text-sm text-neutral-400  font-normal tracking-tighter">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-2 placeholder:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900"
                                placeholder="Enter Password"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <CoolMode>
                            <div
                                type="submit"
                                className="flex cursor-pointer w-full border-[1px] border-neutral-900 bg-neutral-900 text-neutral-50 py-2 rounded-md  justify-center hover:bg-neutral-800 hover:border-neutral-800 mt-4 transition"
                            >
                                Sign In
                            </div>
                        </CoolMode>
                    </form>
                    <BorderBeam duration={10}
                size={300}
                className="from-transparent via-orange-500 to-transparent"></BorderBeam>
                </div>
            
        </div>
    );
};

export default Signup
