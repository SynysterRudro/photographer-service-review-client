import React from 'react';

const Blogs = () => {
    return (
        <section className="dark:bg-gray-800 my-20 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Difference between SQL and NoSQL?</summary>
                        <div className="px-4 pb-4">
                            <p>
                                1- Type -  SQL databases are primarily called as Relational Databases (RDBMS), whereas NoSQL database are primarily called as non-relational or distributed database.
                                <br />
                                2- Language - SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful and A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
                                <br />
                                3-Scalability - In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is JWT, and how does it work?</summary>
                        <div className="px-4 pb-4">
                            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between javascript and NodeJS?</summary>
                        <div className="px-4 pb-4">
                            <p>
                                1- Javascript is a programming language that is used for writing scripts on the website and NodeJS is a Javascript runtime environment.
                                <br />
                                2- 	Javascript can only be run in the browsers and We can run Javascript outside the browser with the help of NodeJS.
                                <br />
                                3- 	It is basically used on the client-side and nodeJs is mostly used on the server-side.
                                <br />
                                4- Javascript is capable enough to add HTML and play with the DOM and Nodejs does not have capability to add HTML tags.
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does NodeJS handle multiple requests at the same time?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blogs;