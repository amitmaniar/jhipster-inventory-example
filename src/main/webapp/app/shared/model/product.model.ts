import { Moment } from 'moment';
import { ICategory } from 'app/shared/model/category.model';
import { IVendor } from 'app/shared/model/vendor.model';

export interface IProduct {
  id?: number;
  name?: string;
  sku?: string;
  quantity?: number;
  expiry?: Moment;
  category?: ICategory;
  vendor?: IVendor;
}

export const defaultValue: Readonly<IProduct> = {};
