import React from 'react';
import { useForm } from 'react-hook-form';

const FormPrice = ({setFormValue}) => {

    const resetAll = () => {
        reset({ from: 0, to: Infinity });
    };

    const { handleSubmit, register, reset } = useForm();

    const submit = (data) => {
      setFormValue({
        from: data.from || 0,
        to: data.to || Infinity,
      });
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="from">From</label>
                <input {...register('from')} id='from' type="number" />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input {...register('to')} id='to' type="number" />
            </div>
            <button>Filter Price</button>
        </form>
    </div>
  )
}

export default FormPrice;