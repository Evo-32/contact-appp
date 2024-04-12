import React from 'react'

const Signup = () => {
  return (
    <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={SignUp}>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="firstName"
                                    required
                                    value={user.firstName}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="confirmPassword"
                                    value={user.confirmPassword}
                                    onChange={handleInputs}
                                    className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketingAccept"
                                        value={user.marketingAccept}
                                        onChange={handleInputs}
                                        className="h-5 w-5 p-3 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                                    />

                                    <span className="text-sm text-gray-700 dark:text-gray-200">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline dark:text-gray-200">
                                        terms and conditions
                                    </a>
                                    and
                                    <a href="#" className="text-gray-700 underline dark:text-gray-200"> privacy policy </a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                                >
                                    Create an account
                                </button>

                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                                    Already have an account?
                                    <a href="/signin" className="text-gray-700 underline dark:text-gray-200">Log in</a>.
                                </p>
                            </div>
                        </form>
  )
}

export default Signup