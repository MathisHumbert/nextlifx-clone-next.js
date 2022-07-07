import React, { useEffect, useState } from 'react';
import { DocumentData, onSnapshot, collection } from 'firebase/firestore';

import { Movie } from '../typing';
import { db } from '../firebase';

function useList(uid: string) {
  const [list, setList] = useState<Movie[] | DocumentData[]>([]);

  useEffect(() => {
    if (!uid) return;

    return onSnapshot(
      collection(db, 'customers', uid, 'myList'),
      (snapchot) => {
        setList(
          snapchot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
  }, [db, uid]);

  return list;
}

export default useList;
