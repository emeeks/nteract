import * as Immutable from "immutable";

export interface EmptyHost {
  type: "empty";
  bookstoreEnabled?: boolean;
}

export type EmptyHostRecord = Immutable.RecordOf<EmptyHost>;

export const makeEmptyHostRecord = Immutable.Record<EmptyHost>({
  type: "empty",
  bookstoreEnabled: false
});
