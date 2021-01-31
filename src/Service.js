import React, { useState, useEffect } from "react";
import axios from "axios";
import CardElement from "./CardElement";
import DataSet from "./DataSet";
const Service = () => {
  const [photos, setPhotos] = useState(DataSet);

  useEffect(() => {
    const LoremPicsum = async () => {
      const Response = await axios.get("https://picsum.photos/v2/list", {
        params: {
          limit: 6,
          width: 1920,
          height: 1080,
          page: 1,
        },
      });
      setPhotos(Response.data);
    };
    LoremPicsum();
  }, []);

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="service container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {photos.map((photo) => {
                return (
                  <CardElement
                    key={photo.id}
                    author={photo.author}
                    id={photo.id}
                    photo={photo.download_url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
