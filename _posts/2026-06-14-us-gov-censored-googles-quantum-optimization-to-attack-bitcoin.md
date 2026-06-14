---
title: US gov censored Google's Bitcoin-cracking research
description: Google found a faster way to break Bitcoin's cryptography — and the US government told it to keep the method secret.
date: 2026-06-14T15:06:30.712Z
preview: null
tags:
    - cryptography
    - quantum
    - bitcoin
    - cybersecurity
categories:
    - cybersecurity
draft: false
---

![quantum](/assets/img/20260614-quantum.jpg)

When Google's Quantum AI team published research in March claiming it could crack Bitcoin's cryptography far faster than anyone expected, one detail was conspicuously missing: the actual method. Now we know why. According to one of the paper's co-authors, the US government told Google to keep it secret.

## What the paper actually claimed

Google's researchers estimated that a future quantum computer could break the cryptography protecting Bitcoin in **under nine minutes**, using fewer than 500,000 physical qubits — roughly 20 times fewer resources than earlier projections. (A qubit is the basic building block of a quantum computer.)

But the team never showed the "circuits" — the step-by-step recipe — that would make such an attack possible. Instead, they published a cryptographic trick called a zero-knowledge proof, which confirms that the method exists without revealing what it is.

## "Academic censorship"

That gap wasn't Google's choice, says co-author Justin Drake, a researcher at the Ethereum Foundation. In a post on June 1, Drake said the optimizations were deliberately withheld and that Google's own blog quietly acknowledged it had "engaged with the US government." Drake said he witnessed the situation firsthand, couldn't say more — and bluntly called it **academic censorship**.

He didn't name which agency intervened. The most likely reasoning: publishing the full blueprint would effectively hand a working attack manual to rival nations.

Drake also repeated his sobering odds — a **50% chance** that a quantum computer could break the encryption behind Bitcoin and Ethereum before 2032, and a 10% chance before 2030.

## The twist: someone rebuilt it anyway

Secrecy has limits. On the same day, independent researcher André Schrottenloher [reconstructed the hidden quantum systems on his own](https://arxiv.org/abs/2606.02235) — and claimed his version was even more efficient than Google's.

## Why it matters

Ledger's chief technology officer, Charles Guillemet, summed up the real takeaway. No quantum computer can run these attacks today, he stressed — so this isn't a doomsday moment. What's changed is **trust in the official timelines**. The public record on quantum threats, he argued, is now "demonstrably thinner than reality": governments are classifying results on one end, while AI tools quietly reconstruct them on the other.

In short, what authorities choose to hide may now tell us more about the true risk than anything researchers are allowed to publish.