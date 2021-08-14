import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipCodeInput = screen.getByLabelText(/zip:/i);
    const submitButton = screen.getByRole('button');

    userEvent.type(firstNameInput, 'Bobby');
    userEvent.type(lastNameInput, 'Doeee');
    userEvent.type(addressInput, '123 Main st');
    userEvent.type(cityInput, 'Cold Town');
    userEvent.type(stateInput, 'Alaska');
    userEvent.type(zipCodeInput, '123456');
    userEvent.click(submitButton);

    const firstNameDisplay = screen.getByText(/Bobby/i);
    const lastNameDisplay = screen.getByText(/Doeee/i);
    const addressDisplay = screen.getByText(/123 Main st/i);
    const cityDisplay = screen.getByText(/Cold Town/i);
    const stateDisplay = screen.getByText(/Alaska/i);
    const zipDisplay = screen.getByText(/123456/i);


    expect(firstNameDisplay).toBeInTheDocument();
    expect(lastNameDisplay).toBeInTheDocument();
    expect(addressDisplay).toBeInTheDocument();
    expect(cityDisplay).toBeInTheDocument();
    expect(stateDisplay).toBeInTheDocument();
    expect(zipDisplay).toBeInTheDocument();
});
