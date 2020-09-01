/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author James Lees
 * @license MIT
 *
 */

class EasyHTTP {
  // Make HTTP GET Request

  // OLD CODE
  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }

  // NEW CODE
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP POST Request

  // OLD CODE
  // post(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }

  // NEW CODE

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP PUT request
  // put(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "PUT",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  // Make an HTTP DELETE request

  // delete(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then(() => resolve("Resource deleted!"))
  //       .catch((err) => reject(err));
  //   });
  // }

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await "Resource deleted!";
    return resData;
  }
}
