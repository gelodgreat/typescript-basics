import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense, startAddExpense } from '../redux/actions/expenses';
import { Expense } from '../redux/types/Expenses';
import { Store } from '../redux/store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../redux/types/actions';
import { bindActionCreators } from 'redux';

interface HomePageProps {
    id?: string,
    color?: string
}
interface HomePageState { }

//this is used for aggregation of all props
type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

const HomePage = (props: Props) => {

    const onEdit = (expense: Expense) => {
        props.startEditExpense(expense)
    }

    const onRemove = (id: string) => {
        props.startRemoveExpense(id)
    }

    const onAdd = () => {
        const expense = {} as Expense;
        expense.amount = 100;
        expense.createdAt = 1
        expense.description = 'Test'
        expense.id = '111-111-112'
        expense.note = 'take'
        props.startAddExpense(expense)
    }

    useEffect(() => {
        onAdd()
    }, [])

    const { expenses } = props;
    return (
        <div>
            <h1>Expense Page</h1>
            <div>
                {expenses.map(expense => (
                    <div>
                        <p>{expense.description}</p>
                        <p>{expense.amount}</p>
                        <p>{expense.note}</p>
                        <button onClick={() => onRemove(expense.id)}>
                            Remove Expense
                    </button>
                        <button onClick={() => onEdit(expense)}>Edit Expense</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

interface LinkStateProps {
    expenses: Expense[]
}

interface LinkDispatchProps {
    startAddExpense: (expense: Expense) => void;
    startEditExpense: (expense: Expense) => void;
    startRemoveExpense: (id: string) => void;
}

const mapStateToProps = (
    state: AppState,
    ownProps: HomePageProps
): LinkStateProps => ({ expenses: state.expenses })


const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: HomePageProps
): LinkDispatchProps => ({
    startAddExpense: bindActionCreators(startAddExpense, dispatch),
    startEditExpense: bindActionCreators(startEditExpense, dispatch),
    startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
