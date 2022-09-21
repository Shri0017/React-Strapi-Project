import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams ,Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                body
                rating

                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Category() {

  const {id } = useParams();

  const {loading , error , data } = useQ

  return <div>category</div>;
}
