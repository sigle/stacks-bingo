
;; stacks-bingo
;; <add a description here>

;; constants
;;
(define-constant contract-owner tx-sender)

;; constants errors
;;
(define-constant err-not-authorized (err u403))

;; data maps and vars
;;

;; private functions
;;

;; public functions
;;

;; TODO - verify that the amount is an integer without decimals
;; TODO - call friedger contract to change the reward address
;; TODO - decide the on-chain structure to store the tickets => 1 STX = 1 ticket
(define-public (delegate-stx (amount-ustx uint) (delegate-to principal))
  (begin
    (try! (contract-call? 'ST000000000000000000002AMW42H.pox delegate-stx amount-ustx delegate-to none none))
    (ok true)))

;; TODO - after the cycle payout is received, decide the winnet using the vrf-seed